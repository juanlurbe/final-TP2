import { Router } from "express";
import UserController from "../controllers/UserController.js";


const userRoutes = Router();

const userController = new UserController();

userRoutes.post("/", userController.createUser);
userRoutes.post("/login", userController.login);

userRoutes.get("/me", userController.getMe);


userRoutes.get("/", userController.getAllUsers);
userRoutes.get("/:id", userController.getUserById);
userRoutes.put("/:id", userController.updateUser);
userRoutes.delete("/:id", userController.deleteUser);

export default userRoutes;