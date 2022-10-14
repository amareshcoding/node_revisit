const { Readable, Writable } = require('stream');

const readableStream = new Readable({
  //   objectMode: true, its used to read an object
  //   highWaterMark: 2,
  read() {},
});

const writableStream = new Writable({
  write(p) {
    console.log('p: ', p.toString());
  },
});

readableStream.on('data', (chunk) => {
  console.log('chunk: ', chunk.toString());
  writableStream.write(chunk);
});

readableStream.push('Pushing message in the form of String');

// writableStream.write('Hello');

//transform stream
