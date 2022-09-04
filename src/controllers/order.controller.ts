import { NextFunction, Request, Response } from "express";
import MenuItem from "../models/menuItems";
import Orders from "../models/order";

export const getAllOrders = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const orders = await Orders.findAll({ include: MenuItem });
    res.status(200).json(orders);
  } catch (err) {
    next(err);
  }
};

export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { item_id, client_name } = req.body;
  try {
    const newOrder = await Orders.create({
      item_id,
      client_name,
    });
    res.status(201).json({
      message: "wait 10 min to be served",
      order: newOrder,
    });
  } catch (err) {
    next(err);
  }
};

export const deleteOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const item = await Orders.destroy({
      where: {
        order_id: req.params.id,
      },
    });
    res.status(200).json({
      message: "order deleted",
      order_id: req.params.id,
    });
  } catch (err) {
    next(err);
  }
};

export const editOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const order = await Orders.update(req.body, {
      where: {
        order_id: req.params.id,
      },
    });
    res.status(200).json(order);
  } catch (err) {
    next(err);
  }
};
