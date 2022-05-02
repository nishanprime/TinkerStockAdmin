import aws from 'aws-sdk';
import fs from 'fs';

//creds
const bucketName = process.env.BUCKET_NAME;
const endPoint = process.env.DIGITAL_OCEAN_ENDPOINT;
const digitalOceanSpaces = new aws.Endpoint(endPoint);
console.log(bucketName);
export const s3 = new aws.S3({
  endpoint: digitalOceanSpaces,
  accessKeyId: process.env.DIGITAL_OCEAN_BUCKET_ACCESS_KEY,
  secretAccessKey: process.env.DIGITAL_OCEAN_BUCKET_SECRET_KEY,
});

//function to upload file to s3
export const uploadToS3Bucket = (file) => {
  const fileStream = fs.createReadStream(file.path);
  console.log(file);
  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: `${file.filename.replaceAll(/\s/g, '-')}`,
  };
  return s3.upload(uploadParams).promise();
};

//download a file from s3
export const getFileStream = (fileKey) => {
  const downloadParams = {
    Key: fileKey,
    Bucket: bucketName,
  };
  return s3.getObject(downloadParams).createReadStream();
};
