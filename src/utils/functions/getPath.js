import { fileURLToPath } from 'url'
import { dirname } from 'path';

const getPath = (url, path) => {
  const __fileName = fileURLToPath(url);
  return dirname(__fileName) + path;
}

export default getPath;