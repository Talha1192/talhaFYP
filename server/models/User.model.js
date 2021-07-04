  
const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const userSchema = new Schema(
  {
    fullName:{type:String,required: true },
    email: { type: String, required: false },
    password: { type: String, required: true },
    package:[{
      type: Schema.Types.ObjectId,
      ref:'package',
    }],
    register_date: { type: Date, default: Date.now },
  },
 
);

const User = mongoose.model("users", userSchema);
module.exports = User;