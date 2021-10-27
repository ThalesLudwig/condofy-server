import { PostSchema } from "../database/Schemas/PostSchema";
import { IPost } from "../interfaces/Post";

export class PostService {
  async fetchAllPosts() {
    const posts = await PostSchema.find().sort("-createdAt");
    return posts;
  }

  async createPost(post: IPost) {
    const newPost = await PostSchema.create(post);
    return newPost;
  }
}
