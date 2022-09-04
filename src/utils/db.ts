import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

// Option 1: Passing a connection URI
const db = new Sequelize(`postgres://${process?.env?.SUPABASE_DB_URL}`); // Example for postgres

export default db;
