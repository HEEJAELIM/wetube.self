import express from "express";
import { handleUser, handleUId, handleEP } from "../controller/userController";

const userRouter = express.Router();

userRouter.get("/user", handleUser);
userRouter.get("/:id", handleUId);
userRouter.get("/edit-profile", handleEP);

export default userRouter;