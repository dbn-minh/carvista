import { Sequelize } from 'sequelize';
import initModels from '../models/init-models.js';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
  }
);

const models = initModels(sequelize);

export { sequelize, models };
