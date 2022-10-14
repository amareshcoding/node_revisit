const http = require('http');
const fs = require('fs');
const { Transform } = require('stream');

const server = http.createServer((req, res) => {
  if (req.url !== '/') {
    return res.end();
  }

  //   normal way
  //   const file = fs.readFileSync('test.txt');
  //   return res.end(file);

  //   stream way
  //   const readableStream = fs.createReadStream('test.txt');
  //   res.writeHead(200, { 'Content-Type': 'text' });
  //   readableStream->writableStream
  //   readableStream.pipe(res);

  //   copy file in normal way
  //   const file = fs.readFileSync('text.txt');
  //   fs.writeFileSync('copytext.txt', file);

  //   copy file in stream way
  //   const readStream = fs.createReadStream('test.txt', { encoding: 'utf-8' });
  //   const writeStream = fs.createWriteStream('copytext.txt');

  //   readStream.on('data', (chunk) => {
  //     writeStream.write(chunk);
  //   });

  //stream processing
  const processStream = fs.createReadStream('test.txt', { encoding: 'utf-8' });
  const copyToStream = fs.createWriteStream('copytest.txt');
  const transform = new Transform({
    transform(chunk, encoding, callback) {
      const finalStream = chunk
        .toString()
        .toUpperCase()
        .replaceAll(/8000/gi, '8080');
      callback(null, finalStream);
    },
  });

  //first way
  //   processStream.on('data', (chunk) => {
  //     console.log('chunk: ', chunk);
  //     // converting all string to UPPER CASE
  //     const processedToUppercase = chunk.toString().toUpperCase();
  //     //console.log('processedToUppercase: ', processedToUppercase);
  //     //replace 'node' to 'nodemon
  //     const finalStream = processedToUppercase.replaceAll(/8000/gi, '8080');
  //     console.log('finalStream: ', finalStream);
  //   });

  //second way
  processStream.pipe(transform).pipe(copyToStream);

  res.end();
});

const PORT = 8000;
server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
