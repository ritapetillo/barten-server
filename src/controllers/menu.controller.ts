import { NextFunction, Request, Response } from "express";
import MenuItems from "../models/menuItems";

export const getMenuItemsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const items = await MenuItems.findAll();
    res.status(200).json(items);
  } catch (err) {
    next(err);
  }
};

export const createAMenuItem = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, price, description } = req.body;
  console.log(req.body);
  try {
    const newItem = await MenuItems.create({
      name,
      price,
      description,
    });

    res.status(201).json({
      message: "created",
      item: newItem,
    });
  } catch (err) {
    next(err);
  }
};

export const deleteMenuItem = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const item = await MenuItems.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(item);
  } catch (err) {
    next(err);
  }
};
