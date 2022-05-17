import { Router } from 'express';

import {
  createComment,
  deleteComment,
  getComment,
  getComments,
  updateComment,
} from '../controllers/comment.controller.js';

const router = Router();

router.get('', getComments);
router.post('', createComment);
router.put('/:id', updateComment);
router.delete('/:id', deleteComment);
router.get('/:id', getComment);

export default router;
