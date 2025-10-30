import mongoose from "mongoose";
import bcrypt from "bcrypt";
import userModel from "./models/userModel.js";

const seedAdmin = async () => {
  await mongoose.connect(process.env.MONGO_URL);

  const exists = await userModel.findOne({ email: process.env.ADMIN_EMAIL });
  if (!exists) {
    const hashed = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);
    await userModel.create({
      name: "Admin",
      email: process.env.ADMIN_EMAIL,
      password: hashed,
      role: "admin",
    });
    console.log("✅ Admin user created");
  } else {
    console.log("ℹ️ Admin already exists");
  }

  process.exit();
};

seedAdmin();