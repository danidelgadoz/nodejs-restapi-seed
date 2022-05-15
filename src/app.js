import express from 'express';
import morgan from 'morgan';

import commentsRoutes from './routes/comment.routes.js';
import postsRoutes from './routes/post.routes.js';
import usersRoutes from './routes/user.routes.js';

const app = express();

// middlewares
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => res.send('Node.js Rest API'));

app.use('/api/comments', commentsRoutes);
app.use('/api/posts', postsRoutes);
app.use('/api/users', usersRoutes);

export default app;
