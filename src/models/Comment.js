import { DataTypes } from 'sequelize';

import { sequelize } from '../database/database.js';
import { Post } from './Post.js';
import { User } from './User.js';

export const Comment = sequelize.define(
  'comments',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

Post.hasMany(Comment, {
  foreignKey: {
    allowNull: false,
  },
});

Comment.belongsTo(Post);

User.hasMany(Comment, {
  foreignKey: {
    name: 'authorId',
    allowNull: false,
  },
});

Comment.belongsTo(User, {
  as: 'author',
  foreignKey: {
    name: 'authorId',
  },
});
