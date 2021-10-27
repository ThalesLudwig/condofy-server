import mongoose from "mongoose";

const host = process.env.DATABASE_URL || "";

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(host);
  } catch (error) {
    console.log({
      error,
    });
  }
};
