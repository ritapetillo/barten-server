import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import errorHandler from "node-error-handler";
import menuRoutes from "./routes/menu";
import sequelize from "./utils/db";
import ordersRoutes from "./routes/orders";

const app = express();

dotenv.config();

//cors
app.use(cors());
// json
app.use(express.json());

// routes
app.use("/menu", menuRoutes);
app.use("/orders", ordersRoutes);

//error handler middleware
app.use(
  errorHandler({
    debug: true,
    trace: app.get("env") === "development",
    camel_case: true,
  })
);

sequelize.authenticate();
app.listen(process.env.EXTERNAL_PORT, () => console.log("connected"));
// connect to express
