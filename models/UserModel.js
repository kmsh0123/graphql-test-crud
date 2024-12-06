import mongoose, { Schema } from "mongoose";

const userSchema = Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
});

const User = mongoose.model("User", userSchema);
export default User;
