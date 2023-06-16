import { readdir } from 'fs/promises';
import errorMessages from '../utils/errorMessages.js';
import getPath from '../utils/functions/getPath.js';

const list = async () => {
  const path = getPath(import.meta.url, '/files');
    try {
      const files = await readdir(path);
      for (let file of files) {
        console.log(file);
      }
    } catch {
      throw new Error(errorMessages.fs);
    }
};

await list();