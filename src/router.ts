import { Router } from "express";
import * as routes from "./constants/routes";
import { CondominiumController } from "./controllers/CondominiumController";
import { LikeController } from "./controllers/LikeController";
import { PostController } from "./controllers/PostController";
import { UserController } from "./controllers/UserController";

const router = Router();
const postController = new PostController();
const userController = new UserController();
const condominiumController = new CondominiumController();
const likeController = new LikeController();

router.get(routes.ROOT, (req, res) => res.json("Condofy Server"));

router.get(routes.GET_POSTS, postController.getAllPosts);
router.get(routes.GET_POST, postController.getPostById);
router.post(routes.CREATE_POST, postController.createPost);
router.put(routes.UPDATE_POST, postController.updatePost);
router.delete(routes.DELETE_POST, postController.deletePost);

router.get(routes.GET_ALL_USERS, userController.getAllUsers);
router.post(routes.CREATE_USER, userController.createUser);

router.get(routes.GET_LIKES, likeController.getAllLikes);
router.post(routes.CREATE_LIKE, likeController.createLike);
router.delete(routes.DELETE_LIKE, likeController.deleteLike);

router.get(
  routes.GET_ALL_CONDOMINIUMS,
  condominiumController.getAllCondominiums,
);
router.post(routes.CREATE_CONDOMINIUM, condominiumController.createCondominium);

export default router;
