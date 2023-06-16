import { rm } from 'fs/promises'
import getPath from '../utils/functions/getPath.js';
import errorMessages from '../utils/errorMessages.js';

const remove = async () => {
  const path = getPath(import.meta.url, '/files/fileToRemove.txt');
  try {
    await rm(path);
  } catch {
    throw new Error(errorMessages.fs);
  }
};

await remove();