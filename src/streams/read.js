import { createReadStream } from 'fs';
import getPath from '../utils/functions/getPath.js';

const read = async () => {
  const path = getPath(import.meta.url, '/files/fileToRead.txt');
  const write = process.stdout;
  const readStream = createReadStream(path, 'utf-8');
  readStream.pipe(write)
};

await read();