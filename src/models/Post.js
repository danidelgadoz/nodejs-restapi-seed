import { DataTypes } from 'sequelize';

import { sequelize } from '../database/database.js';
import { User } from './User.js';

export const Post = sequelize.define(
  'posts',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

User.hasMany(Post, {
  foreignKey: {
    name: 'authorId',
    allowNull: false,
  },
});

Post.belongsTo(User, {
  as: 'author',
  foreignKey: {
    name: 'authorId',
  },
});
