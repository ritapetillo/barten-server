import sequelize from "../utils/db";
import { DataTypes } from "sequelize";
import MenuItem from "./menuItems";

const Order = sequelize.define(
  "orders",
  {
    order_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      unique: true,
    },
    closed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    client_name: {
      type: DataTypes.STRING,
    },
    item_id: {
      type: DataTypes.INTEGER,
      references: {
        model: MenuItem,
        key: "id",
      },
    },
  },
  {
    updatedAt: false,
  }
);

Order.belongsTo(MenuItem, {
  foreignKey: "item_id",
});
export default Order;
