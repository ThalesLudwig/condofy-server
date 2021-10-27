import { Router } from "express";
import * as routes from "./constants/routes";
import { PostController } from "./controllers/PostController";

const router = Router();
const postController = new PostController();

router.get(routes.GET_ALL_POSTS, postController.getAllPosts);
router.post(routes.CREATE_POST, postController.createPost);

export default router;
