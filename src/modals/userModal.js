import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
       firstname : {
        type : String,
        required : [true, "Please provide a firstname"],
        unique: true,
       },
       lastname: {
        type : String,
        required : [true, "Please provide a lastname"],
        unique: true,
       },
       email: {
        type : String,
        required : [true, "Please provide a email"],
        unique: true,
       },
       password: {
        type : String,
        required : [true, "Please provide a password"],
       },
       confirmpassword: {
        type : String,
        required : [true, "Please provide a lastname"],
       },
 })

 const User  = mongoose.models.Users || mongoose.model("users", userSchema);
 export default User;