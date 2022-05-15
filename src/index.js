import app from './app.js';
import { sequelize } from './database/database.js';

const port = 3000;

(async () => {
  await sequelize.sync({ alter: true });
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
})();
