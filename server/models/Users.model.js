const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');


const UserSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    fullName:String,
    email: String,
    verified: {
        type: Boolean,
        required: true,
        default: false
    },
    token:String,
    register_date: { type: Date, default: Date.now },
});

UserSchema.methods.generateVerificationToken = function () {
    const user = this;
    const verificationToken = jwt.sign(
        { ID: user._id },
        process.env.USER_VERIFICATION_TOKEN_SECRET,
        { expiresIn: "7d" }
    );
    return verificationToken;
};
module.exports = mongoose.model("User", UserSchema);