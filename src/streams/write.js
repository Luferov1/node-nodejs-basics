import { createWriteStream } from 'fs';
import getPath from '../utils/functions/getPath.js';

const write = async () => {
  const path = getPath(import.meta.url, '/files/fileToWrite.txt');
  const writeStream = createWriteStream(path);
  const read = process.stdin;
  read.pipe(writeStream);
  // process.stdin.on('data', (chunk) => {
  //   stream.write(chunk.toString());
  // });
};

await write();