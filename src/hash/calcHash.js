import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
import getPath from '../utils/functions/getPath.js';

const calculateHash = async () => {
  const path = getPath(import.meta.url, '/files/fileToCalculateHashFor.txt');
  const text = await readFile(path, { encoding: 'utf-8' });
  console.log(createHash('sha3-256').update(text).digest('hex'))
};

await calculateHash();