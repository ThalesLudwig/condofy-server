import { Router } from "express";
import * as routes from "./constants/routes";
import { CondominiumController } from "./controllers/CondominiumController";
import { PostController } from "./controllers/PostController";
import { UserController } from "./controllers/UserController";

const router = Router();
const postController = new PostController();
const userController = new UserController();
const condominiumController = new CondominiumController();

router.get(routes.GET_ALL_POSTS, postController.getAllPosts);
router.post(routes.CREATE_POST, postController.createPost);
router.put(routes.UPDATE_POST, postController.updatePost);
router.delete(routes.DELETE_POST, postController.deletePost);

router.get(routes.GET_ALL_USERS, userController.getAllUsers);
router.post(routes.CREATE_USER, userController.createUser);

router.get(
  routes.GET_ALL_CONDOMINIUMS,
  condominiumController.getAllCondominiums,
);
router.post(routes.CREATE_CONDOMINIUM, condominiumController.createCondominium);

export default router;
