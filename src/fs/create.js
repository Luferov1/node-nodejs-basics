import { writeFile } from 'fs/promises';
import getPath from '../utils/functions/getPath.js';

const create = async () => {
  const src = getPath(import.meta.url, '/files/fresh.txt');
  const text = 'I am fresh and young';
  const errorMessage = 'FS operation failed';
  try {
    await writeFile(src, text, { flag: 'wx' });
  } catch {
    throw new Error(errorMessage);
  }
};

await create();