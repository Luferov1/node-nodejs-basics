import { createGzip } from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';
import getPath from '../utils/functions/getPath.js';

const compress = async () => {
  const currentPath = import.meta.url;
  const fileToCompressPath = getPath(currentPath, '/files/fileToCompress.txt');
  const zipPath = getPath(currentPath, '/files/archive.gz');
  const readableStream = createReadStream(fileToCompressPath);
  const writableStream = createWriteStream(zipPath);
  const compressedStream = createGzip();

  pipeline(
    readableStream,
    compressedStream,
    writableStream,
    (e) => e && console.log('Something went wrong')
  );
};

await compress();