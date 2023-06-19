import getPath from '../utils/functions/getPath.js';
import { fork } from 'child_process';

const spawnChildProcess = async (args) => {
  const path = getPath(import.meta.url, '/files/script.js');

  const ch_process = fork(path, args, { silent: true });
  process.stdin.pipe(ch_process.stdin);
  ch_process.stdout.pipe(process.stdout);
};

spawnChildProcess(['start', 'end', 'table']);
