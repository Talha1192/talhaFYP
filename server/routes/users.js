const Router = require("express");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const User = require("../models/User.model")
const Package = require("../models/Package.model")

const router = Router.Router();

const  JWT_SECRET  = process.env.JWT_SECRET
/**
 * @route   POST api/user/signup
 * @desc    Register new user
 * @access  Public
 */

router.post("/signup", async (req, res) => {
    const { fullName, email,phone, password } = req.body;
  
    // Validation
  
    if (!fullName || !email  || !password) {
      return res.status(400).json({ msg: "Please enter all feilds" });
    }
  
    try {
      const mailCheck = await User.findOne({email});
      if (mailCheck) return res.status(409).json({ msg:"Email already exists"});
  
      const salt = await bcrypt.genSalt(10);
      if (!salt) throw Error("Something went wrong with bcrypt");
  
      const hash = await bcrypt.hash(password, salt);
      if (!hash) throw Error("Something went wrong hashing password");
  
      const newUser = new User({
        fullName: fullName,
        phone: phone,
        email:email,
        password: hash,
      });
  
      const savedUser = await newUser.save();
      if (!savedUser) throw Error("Something went wrong saving the user");
  
      const token = jwt.sign({ id: savedUser._id }, JWT_SECRET, {
        expiresIn: 3600,
      });
  
      res.status(200).json({
        token,
        msg:'Congrats You are Signed In',
        user: {
          id: savedUser._id,
          name: savedUser.fullName,
          email: savedUser.email,
        
        },
      });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  



  /**
 * @route   POST api/users/login
 * @desc    Login  user
 * @access  Public
 */

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    // Validation
    if (!email || !password) {
      return res.status(400).json({ msg: "Please enter all feilds" });
    }
  
    try {
      // Check exisitng User
      const user = await User.findOne({ email });
      if (!user) throw Error("User does not exist");
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) throw Error("Password does not match");
  
      const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: 3600 });
      if (!token) throw Error("Could not sign token");
  
      res.status(200).json({
        msg: 'Logged In Successfully    ',
        token,
        user: {
          id: user._id,
          fullName:user.fullName,
          phone:user.phone,
          emial:user.email,
        },
      });
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  });
  
  



  /**
 * @route   GET api/users/all
 * @desc    Get all users
 * @access  Private
 */


router.get('/all', async (req, res) => {
    try {
      const users = await User.find();
      if (!users) throw Error('No users exist');
      res.json(users);
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  });


/**
 * @route   GET api/users/id
 * @desc    Get specific user 
 * @access  Private
 */

router.route("/:id").get((req, res) => {
    User.findById(req.params.id)
      .then((user) => res.json(user))
      .catch((err) => res.status(400).json("Error: " + err));
  });
  



/**
 * @route   Delete api/users/id
 * @desc    User Deleted
 * @access  Private
 */


router.route("/:id").delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
      .then(() => res.json("User Deleted !"))
      .catch((err) => res.status(400).json("Error: " + err));
  });


  

/**
 * @route   GET api/users/update/:id
 * @desc    Get all users
 * @access  Private
 */


router.route ("/update/:id").post((req, res)  => {
    User.findById(req.params.id)
      .then((user) => {
        

        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.email = req.body.email;
        // password left
  
        user
          .save()
          .then(() => res.json("User updated !"))
          .catch((err) => res.status(400).json("Error: " + err));
      })
      .catch((err) => res.status(400).json("Error: " + err));
  });


  module.exports = router