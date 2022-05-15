import { User } from '../models/User.js';

export const createUser = async (req, res) => {
  const { username, name } = req.body;

  try {
    const entity = await User.create({ username, name });

    res.status(201).json(entity);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const entity = await User.findByPk(id);
    if (!entity) return res.sendStatus(404);

    await entity.destroy();
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const entity = await User.findByPk(id);

    if (!entity) res.sendStatus(404);

    res.json(entity);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const entities = await User.findAll();
    res.json(entities);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, name } = req.body;

  try {
    const entity = await User.findByPk(id);

    if (!entity) res.sendStatus(404);

    entity.username = username;
    entity.name = name;
    await entity.save();

    res.json(entity);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
