import upload from '../controller/uploadController.js';
import express from 'express';
import { uploadToS3Bucket } from '../config/s3Config.js';
import fs from 'fs';
import util from 'util';
const unlinkFile = util.promisify(fs.unlink);
const router = express.Router();

router.post('/', upload.single('course'), async (req, res) => {
  const file = req.file;
  const resultFromS3 = await uploadToS3Bucket(file);
  console.log(resultFromS3);
  //after uploading to s3, delete file from server
  await unlinkFile(file.path);
  const fullVideoUrl =
    req.protocol +
    '://' +
    req.get('host') +
    '/api/downloads/videos/' +
    resultFromS3.key;
  console.log(fullVideoUrl);
  res.send(fullVideoUrl);
});

export default router;
