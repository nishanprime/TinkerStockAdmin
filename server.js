import express from 'express';
import 'dotenv/config';
const app = express();
import uploadRouter from './router/uploadRouter.js';
import downloadRouter from './router/downloadRouter.js';
app.use('/api/uploads', uploadRouter);
app.use('/api/downloads', downloadRouter);
app.listen(process.env.PORT, () => {
  console.log('Listening to', process.env.PORT);
});
