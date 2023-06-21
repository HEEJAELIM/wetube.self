import express from "express";
import {
  handleProfile,
  handleLogOut,
  getEdit,
  postEdit,
  handleRemove,
  startGithubLogin,
  finishGithubLogin,
} from "../controller/userController";

const userRouter = express.Router();

userRouter.get("/:id", handleProfile);
userRouter.get("/logout", handleLogOut);
userRouter.route("/edit").get(getEdit).post(postEdit);
userRouter.get("/remove", handleRemove);
userRouter.get("/github/start", startGithubLogin);
userRouter.get("/github/finish", finishGithubLogin);

export default userRouter;
