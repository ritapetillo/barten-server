import express from "express";
import {
  createOrder,
  deleteOrder,
  editOrder,
  getAllOrders,
} from "../../controllers/order.controller";
const ordersRouter = express.Router();

// localhost:3001/orders
ordersRouter.get("/", getAllOrders);
ordersRouter.post("/", createOrder);
ordersRouter.delete("/:id", deleteOrder);
ordersRouter.put("/:id", editOrder);

export default ordersRouter;
