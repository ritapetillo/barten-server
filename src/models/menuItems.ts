import sequelize from "../utils/db";
import { DataTypes } from "sequelize";
import Order from "./order";

const MenuItem = sequelize.define(
  "menuitems",
  {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.NUMBER,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
  },
  {
    updatedAt: false,
  }
);

export default MenuItem;
