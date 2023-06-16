import { cp } from 'fs/promises';
import getPath from '../utils/functions/getPath.js';
import errorMessages from '../utils/errorMessages.js';

const copy = async () => {
  const source = getPath(import.meta.url, '/files');
  const destination = getPath(import.meta.url, '/files_copy');
  try {
    await cp(source, destination, { recursive: true, errorOnExist: true, force: false,  });
  } catch {
    throw new Error(errorMessages.fs)
  }
};

await copy();
