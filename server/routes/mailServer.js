const nodemailer = require("nodemailer");
const Router = require("express");


const router = Router.Router();

router.post('/send', function(req, res) {
  

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

transporter.sendMail({
  to: 'talhamaiken92@gmail.com',
  subject: "Test Email",
  text: `this is a test email\nHello THere `,
}).then(res=>{
  console.log(res.messageId, 'Mail send')
  
}).catch(err=>console.log(err));
res.json({ message: "Your Request Has Been Forwarded to our agent. Kindly check your email after 15 mins"})

})


router.post('/package/send', function(req, res) {
  

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
  
  transporter.sendMail({
    to: 'talhamaiken92@gmail.com',
    subject: "Photography",
    cc:`${req.body.email}`,
    text: `User: ${req.body.user}\n
    Packages: ${req.body.packageItems.q.map(e=>e.text,'\n')}. `,
  }).then(res=>{
    console.log(res.messageId, 'Mail send')
    
  }).catch(err=>console.log(err));
  res.json({ message: "An Email has been sent"})
  
  })


module.exports = router