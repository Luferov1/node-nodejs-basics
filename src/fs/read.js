import { readFile } from 'fs/promises';
import getPath from '../utils/functions/getPath.js';
import errorMessages from '../utils/errorMessages.js';

const read = async () => {
  const path = getPath(import.meta.url, '/files/fileToRead.txt');
  try {
    const content = await readFile(path, { encoding: 'utf-8' });
    console.log(content);
  } catch {
      throw new Error(errorMessages.fs);
  }
};

await read();