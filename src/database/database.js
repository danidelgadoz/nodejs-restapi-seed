import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('blogdb', 'postgres', 'secret', {
  host: 'localhost',
  dialect: 'postgres',
});
