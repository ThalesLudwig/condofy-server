import mongoose from "mongoose";

const post = new mongoose.Schema({ text: String }, { timestamps: true });

export const PostSchema = mongoose.model("posts", post);
