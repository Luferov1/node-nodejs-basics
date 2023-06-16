import * as fs from 'fs/promises'
import getPath from '../utils/functions/getPath.js';
import errorMessages from '../utils/errorMessages.js';
import isExists from '../utils/functions/isExists.js';

const rename = async () => {
  const oldPath = getPath(import.meta.url, '/files/wrongFilename.txt');
  const newPath = getPath(import.meta.url, '/files/properFilename.md');
  const _isExists = await isExists(newPath);
  if (_isExists) throw new Error(errorMessages.fs);
  else {
    await fs.rename(oldPath, newPath);
  }
};

await rename();