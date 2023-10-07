import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "Please provide a firstname"],
    },
    lastname: {
        type: String,
        required: [true, "Please provide a lastname"],
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
    }

})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;