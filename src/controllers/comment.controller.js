import { Comment } from '../models/Comment.js';

export const createComment = async (req, res) => {
  const { comment, postId, authorId } = req.body;

  try {
    const entity = await Comment.create({ comment, postId, authorId });

    res.status(201).json(entity);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteComment = async (req, res) => {
  const { id } = req.params;
  try {
    const entity = await Comment.findByPk(id);
    if (!entity) return res.sendStatus(404);

    await entity.destroy();
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getComment = async (req, res) => {
  const { id } = req.params;

  try {
    const entity = await Comment.findByPk(id);

    if (!entity) res.sendStatus(404);

    res.json(entity);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getComments = async (req, res) => {
  try {
    const entities = await Comment.findAll();
    res.json(entities);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateComment = async (req, res) => {
  const { id } = req.params;
  const { comment } = req.body;

  try {
    const entity = await Comment.findByPk(id);

    if (!entity) res.sendStatus(404);

    entity.comment = comment;
    await entity.save();

    res.json(entity);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
