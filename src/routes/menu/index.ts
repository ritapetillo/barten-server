import express from "express";
import {
  createAMenuItem,
  getMenuItemsController,
} from "../../controllers/menu.controller";
const menuRouter = express.Router();

// localhost:3001/menu

menuRouter.get("/", getMenuItemsController);
menuRouter.post("/", createAMenuItem);

export default menuRouter;
