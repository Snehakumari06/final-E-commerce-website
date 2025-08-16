import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("❌ Please set MONGO_URI in Vercel Environment Variables");
}

let isConnected = false;

async function dbConnect() {
  if (isConnected) return;
  await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  isConnected = true;
}

export default dbConnect;
