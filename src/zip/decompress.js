import { createUnzip } from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';
import getPath from '../utils/functions/getPath.js';

const decompress = async () => {
  const currentPath = import.meta.url;
  const fileToCompressPath = getPath(currentPath, '/files/archive.gz');
  const zipPath = getPath(currentPath, '/files/fileToCompress.txt');
  const readableStream = createReadStream(fileToCompressPath);
  const writableStream = createWriteStream(zipPath);
  const uncompressedStream = createUnzip();

  pipeline(
    readableStream,
    uncompressedStream,
    writableStream,
    (e) => e && console.log('Something went wrong')
  );
};

await decompress();