import express from 'express';
import { getFileStream } from '../config/s3Config.js';
const router = express.Router();

router.get('/:key', async (req, res) => {
  const key = req.params.key;
  const readStream = getFileStream(key);
  readStream.pipe(res);
});

export default router;
