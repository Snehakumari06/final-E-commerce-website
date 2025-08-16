import dbConnect from "./db.js";
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    const { type, username, password } = req.body;

    if (type === "register") {
      const existing = await User.findOne({ username });
      if (existing) return res.status(400).json({ error: "User already exists" });

      const user = new User({ username, password });
      await user.save();
      return res.status(201).json({ success: true, message: "Registered successfully" });
    }

    if (type === "login") {
      const user = await User.findOne({ username, password });
      if (!user) return res.status(401).json({ error: "Invalid credentials" });
      return res.status(200).json({ success: true, message: "Login successful" });
    }

    return res.status(400).json({ error: "Invalid type" });
  }

  res.status(405).json({ error: "Method not allowed" });
}
