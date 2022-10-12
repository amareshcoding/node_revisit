const http = require('http');
const fs = require('fs');
const path = require('path');
const product = require('./product.json');
const { createReadStream } = require('fs');

const pageNotFound = fs.readFileSync(`${__dirname}/notfound.html`, {
  encoding: 'utf-8',
});

// let data1 = fs.readFileSync(
//   `${__dirname}/text.txt`,
//   { encoding: 'utf-8' },
//   (err, data) => {
//     if (err) throw err;
//   }
// );
// const data2 = fs.readFile('./test.txt', { encoding: 'utf-8' }, (err, data) => {
//   console.log('readData: ', data);
// });
const stream = createReadStream('./test.txt', { encoding: 'utf8' });
stream.on('data', (dataChunk) => {
  res.write(dataChunk);
});
// async function logChunks(stream) {
//   for await (const chunk of stream) {
//     console.log(chunk);
//   }
// }
logChunks(stream)
stream.on('end', () => {
  res.end();
});
stream.on('error', (err) => {
  console.log('err: ', err);
  res.end();
});

const homePage = fs.readFileSync(`${__dirname}/index.html`, {
  encoding: 'utf-8',
});

const server = http.createServer((req, res) => {
  console.log(req.url)
  let message = 'Welcome to ';

  switch (req.url) {
    case '/': {
      console.time('t1');
      res.setHeader('content-type', 'text/html');
      res.write(homePage);
      console.timeEnd('t1');
      break;
    }
    case '/product': {
      res.setHeader('content-type', 'text/json');
      message += 'Product Page';
      res.write(`<h1>${message}</h1>`);
      product.posts.forEach((e) => {
        res.write(
          `<ul>
               <li>${e.id}</li>
               <li>${e.author}</li>
          </ul>`
        );
      });
      break;
    }
    case '/test': {
      // const directory = __dirname;
      // let bag = '';
      // fs.readdirSync(directory).forEach((file) => {
      //   // bag += ` /${file} \n`;
      //   res.write(` /${file}`);
      // });
      // res.write(bag);

      let dir = fs.readdirSync(__dirname);
      dir.forEach((d) => res.write(`<h1>/${d}</h1>`));
      break;
    }
    case '/public': {
      const directory = './public';
      fs.readdirSync(directory).forEach((file) => {
        res.write(` /${file}`);
      });
      break;
    }
    case "/textsync":{
      console.time("t1")
      //operation
      console.timeEnd("t1")
    }
    default: {
      res.write(pageNotFound);
    }
  }

  res.end();
});
//start server
server.listen(8080, () => {
  console.log('starting server on 8080');
});

// console.log('4');
// setImmediate(()=> console.log('5') )
// setTimeout(()=>{
//      console.log('3');
// }, 0);
// console.log('6');

//whenever the process.next gets empty, the immediate callback is executed

// console.time("t1");
// //operation
// console.timeEnd("t1");

//benchmarking - time taken for an execution
// npx autocannon http://localhost:8080/
