const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");


require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;


app.disable('x-powered-by')
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());



//routes


const mailRouter = require('./routes/mailServer');

// routes
app.use('/api', require('./routes/routes.js'));
app.use('/mail', mailRouter);




app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Propert Santa testing API.",
    developer: "Saad Aslam",
    links: {
      github_Link: "https://github.com/saadusufzai",
      facebook: "https://www.facebook.com/saadusufzai",
    },
  });
});



app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);

  const uri = process.env.ATLAS_URI;
  mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true })

  const connection = mongoose.connection;

  connection.once("open", () => {
    console.log("MongoDB database connection is successfully established");
  });

});








// const hellosign = require('hellosign-sdk')({ key: 'ce8b2371955bbf83987d0902beb0288f39b8c3382ea501696fe93e90db6002e0' });

// const opts = {
//  test_mode: 1,
//  clientId: req.body.client_id,
//  type: 'request_signature',
//  subject: 'The NDA we talked about',
//  requester_email_address: 'alice@example.com',
//  signers: [
//   {
//     email_address: 'jack@example.com',
//     name: 'Jack'
//   },
//   {
//     email_address: 'jill@example.com',
//     name: 'Jill'
//   }
// ],
// files: ['NDA.docx'],
// };

// hellosign.signatureRequest.createEmbedded(opts).then((data) => {
//   // handle response
//   console.log(data)
//   const firstSignature = data.signature_request.signatures[0];
//     const signatureId = firstSignature.signature_id;

//   hellosign.embedded.getSignUrl(signatureId).then((res) => {
//     console.log('The sign url is: ' + res.embedded.sign_url);
//   }).catch((err) => {
//     // handle error
//   });
  
//   res.json({ 
//     data
//   })
// }).catch((err) => {
 
//   res.json({ 
//     success: err
//   })
// })