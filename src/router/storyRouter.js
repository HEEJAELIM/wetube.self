import express from "express";
import { handleSId, handleSidE, handleSIdD } from "../controller/userController";

const storyRouter = express.Router();

storyRouter.get("/:id", handleSId);
storyRouter.get("/:id/edit", handleSidE);
storyRouter.get("/:id/delete", handleSIdD);

export default storyRouter;