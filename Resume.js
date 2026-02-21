import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
  name: String,
  email: String,
  education: String,
  experience: String,
  skills: [String],
});

export default mongoose.model("Resume", resumeSchema);

