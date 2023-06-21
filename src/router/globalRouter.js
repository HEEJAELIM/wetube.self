import express from "express";
import { handleTrending, handleNew, handleJoin, handleLogin } from "../controller/globalController";

const globalRouter = express.Router();

globalRouter.get("/", handleTrending);
globalRouter.get("/new", handleNew);
globalRouter.get("/join", handleJoin);
globalRouter.get("/login", handleLogin);

export default globalRouter;