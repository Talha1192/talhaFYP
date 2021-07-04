const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const User = require("../models/Users.model.js");
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
  },
});

exports.signup = async (req, res) => {
  const { fullName, email, password,address,phone,cnic } = req.body;
  // Check we have an email
  if (!fullName || !email || !password || !address || !phone ) {
    return res.status(422).send({ message: "fill all the fields" });
  }
  try {
    // Check if the email is in use
    const existingUser = await User.findOne({ email }).exec();
    if (existingUser) {
      return res.status(409).send({
        message: "Email is already in use.",
      });
    }
    // encrypting password before saving
    const salt = await bcrypt.genSalt(10);
    if (!salt) throw Error("Something went wrong with bcrypt");

    const hash = await bcrypt.hash(password, salt);
    if (!hash) throw Error("Something went wrong hashing password");

    // Step 1 - Create and save the user

    const user = await new User({
      _id: new mongoose.Types.ObjectId(),
      fullName: fullName,
      email: email,
      phone:phone,
      address:address,
      password: hash,
    }).save();

    // Step 2 - Generate a verification token with the user's ID
    const verificationToken = user.generateVerificationToken();
    // Step 3 - Email the user a unique verification link
    user.token = verificationToken
    await user.save();
    const url = `http://localhost:5000/api/verify/${verificationToken}`;

    transporter.sendMail({
      to: email,
      subject: "Verify Account",
      html: `Click <a href = '${url}'>here</a> to confirm your email.`,
    });
    return res.status(201).send({

      message: `Sent a verification email to ${email}`,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
};

// Login Logic

exports.login = async (req, res) => {
  const { email, password } = req.body;
  // Check we have an email
  if (!email || !password) {
    return res.status(422).send({
      message: "Missing email or password.",
    });
  }
  try {
    // Step 1 - Verify a user with the email exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({
        message: "User does not exists",
      });
    };
  
    
    // Step 2 - Ensure the account has been verified
    if (!user.verified) {
      return res.status(403).send({
        message: "Verify your Account.\n Check Your mail",
      });
    }


     bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          res.json({ msg: "Success" });
        } else {
          return res.status(400).json({ password: "Password incorrect" });
        }
      })
      .catch(err => {
          res.status(500).send('Internal server error');
      });

      // Step 2 - Generate a verification token with the user's ID
    const loginToken = user.generateVerificationToken();
    
    return res.status(200).send({
      token: loginToken,
      message: "User logged in",
      mail:user.email,
      id:user._id,
      name:user.fullName
    });
  } catch (err) {
      console.log(err)
    return res.status(500).send(err);
  }
};

// Verifying

exports.verify = async (req, res) => {
    const  token  = req.params.id
    console.log("THIS IS THE REQ",req.params)
    // Check we have an id
    if (!token) {
        return res.status(422).send({ 
             message: "Missing Token" 
        });
    }
    // Step 1 -  Verify the token from the URL
    let payload = null
    try {
        payload = jwt.verify(
           token,
           process.env.USER_VERIFICATION_TOKEN_SECRET
        );
    } catch (err) {
        return res.status(500).send(err);
    }
    try{
        // Step 2 - Find user with matching ID
        const user = await User.findOne({ _id: payload.ID }).exec();
        if (!user) {
           return res.status(404).send({ 
              message: "User does not  exists" 
           });
        }
        // Step 3 - Update user verification status to true
        user.verified = true;
        user.token = req.params.id
        await user.save();
        return res.status(200).send({
              message: "Account Verified"
        });
     } catch (err) {
        return res.status(500).send(err);
     }
}