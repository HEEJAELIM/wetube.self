import express from "express";
import {
  handleWatch,
  handleEditVideo,
  handleEditVideoPost,
  handleGetUpload,
  handlePostUpload,
  handleDeleteVideo,
} from "../controller/videoController";

const videoRouter = express.Router();

videoRouter.route("/upload").get(handleGetUpload).post(handlePostUpload);
videoRouter.get("/:id", handleWatch);
videoRouter.route("/:id/edit").get(handleEditVideo).post(handleEditVideoPost);
videoRouter.route("/:id/delete").get(handleDeleteVideo);

export default videoRouter;
