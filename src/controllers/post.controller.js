import { Comment } from '../models/Comment.js';
import { Post } from '../models/Post.js';
import { User } from '../models/User.js';

export const createPost = async (req, res) => {
  const { body, authorId } = req.body;

  try {
    const entity = await Post.create({ body, authorId });

    res.status(201).json(entity);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const entity = await Post.findByPk(id);
    if (!entity) return res.sendStatus(404);

    await entity.destroy();
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getPost = async (req, res) => {
  const { id } = req.params;

  try {
    const entity = await Post.findByPk(id);

    if (!entity) return res.sendStatus(404);

    res.json(entity);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getPosts = async (req, res) => {
  try {
    const entities = await Post.findAll({
      attributes: ['id', 'body'],
      include: [
        {
          model: User,
          as: 'author',
          attributes: ['id', 'username', 'name'],
        },
        {
          model: Comment,
          attributes: ['id', 'comment'],
          include: [
            {
              model: User,
              as: 'author',
              attributes: ['id', 'username', 'name'],
            },
          ],
        },
      ],
    });
    res.json(entities);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { body, authorId } = req.body;

  try {
    const entity = await Post.findByPk(id);

    if (!entity) res.sendStatus(404);

    entity.body = body;
    entity.authorId = authorId;
    await entity.save();

    res.json(entity);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
