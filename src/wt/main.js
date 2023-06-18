import { cpus } from 'os';
import { Worker } from 'worker_threads';
import getPath from '../utils/functions/getPath.js';

const performCalculations = async () => {
  const numberOfCPUs = cpus().length;
  const workerPath = getPath(import.meta.url, '/worker.js');
  const promisesArr = [];
  for (let i = 0; i < numberOfCPUs; i += 1) {
    const promise = new Promise((resolve, reject) => {
      const worker = new Worker(workerPath, {
        workerData: i + 10,
      });
      worker.on('message', (msg) => resolve(msg));
      worker.on('error', (mgs) => reject(mgs));
    })
    promisesArr.push(promise);
  }
  const settledPromises = await Promise.allSettled(promisesArr);
  const result = settledPromises
    .map(
      (result) => result.status === 'fulfilled'
        ? { status: 'resolved', data: result.value }
        : { status: 'error', data: null }
    );
  console.log(result);
};

await performCalculations();