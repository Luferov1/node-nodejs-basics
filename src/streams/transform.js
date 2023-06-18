import { Transform, pipeline } from 'stream';
const transform = async () => {
  const readableStream = process.stdout;
  const writableStream = process.stdin;
  const transform = new Transform({
    transform(chunk, encoding, callback) {
      const handledString = chunk.toString().trim();
      const reversedString = handledString.split('').reverse().join('');
      callback(null, reversedString + '\n');
    }
  });
  pipeline(writableStream, transform, readableStream, (e) => e && console.log(e));
};

await transform();