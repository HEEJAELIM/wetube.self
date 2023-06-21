import express from "express";
import {
  getJoin,
  postJoin,
  getLogin,
  postLogin,
} from "../controller/userController";
import { handleHome, handleSearch } from "../controller/videoController";

const rootRouter = express.Router();

rootRouter.get("/", handleHome);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.route("/login").get(getLogin).post(postLogin);
rootRouter.route("/search").get(handleSearch);

export default rootRouter;
