import { Transform, pipeline } from 'stream';
const transform = async () => {
  const write = process.stdout;
  const read = process.stdin;
  const transform = new Transform({
    transform(chunk, encoding, callback) {
      const handledString = chunk.toString().trim();
      const reversedString = handledString.split('').reverse().join('');
      callback(null, reversedString + '\n');
    }
  });
  pipeline(read, transform, write, (e) => e && console.log('Something went wrong'));
};

await transform();