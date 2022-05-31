import { Sequelize } from 'sequelize';

const dialectOptions = {
  ssl: {
    require: true,
    rejectUnauthorized: false,
  },
};

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    ...(process.env.PRODUCTION === 'true' && { dialectOptions }),
  }
);
