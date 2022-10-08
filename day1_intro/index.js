const {
  sum,
  sub,
  mul,
  divide,
  sin,
  cos,
  tan,
  randomIntFun,
  randomIntFunInLim,
} = require('./test');
//
const isEven = require('is-even');
const os = require('os');
const path = require('path');
const fs = require('fs');

console.log(process.argv);

let fun = process.argv[2];
// console.log('fun: ', fun);
let arg1 = Number(process.argv[3]);
let arg2 = +process.argv[4];

switch (fun) {
  case 'sum': {
    let res = sum(arg1, arg2);
    console.log('res: ', res);
    break;
  }
  case 'sub': {
    let res = sub(arg1, arg2);
    console.log('res: ', res);
    break;
  }
  case 'mul': {
    let res = mul(arg1, arg2);
    console.log('res: ', res);
    break;
  }
  case 'divide': {
    let res = divide(arg1, arg2);
    console.log('res: ', res);
    break;
  }
  case 'sin': {
    let res = sin(arg1);
    console.log('res: ', res);
    break;
  }
  case 'cos': {
    let res = cos(arg1);
    console.log('res: ', res);
    break;
  }
  case 'tan': {
    let res = tan(arg1);
    console.log('res: ', res);
    break;
  }
  case 'random': {
    let res = randomIntFun();
    console.log('res: ', res);
    break;
  }
  case 'randomInLim': {
    let res = randomIntFunInLim();
    console.log('res: ', res);
  }
}

// fs.open('test.txt', 'w', function (err, file) {
//   if (err) throw err;
//   console.log('Saved!');
// }); // create

// fs.writeFileSync('./test.txt', 'writing random text'); // to write

// fs.appendFileSync('./test.txt', ' appended text'); // append

// const content = fs.readFile(
//   './test.txt',
//   { encoding: 'utf-8' },
//   (err, data) => {
//     console.log('readData: ', data);
//   }
// ); //read

// fs.rename('./test.txt', './newtest.txt', (err) => {
//   if (err) throw err;
//   console.log('Rename complete!');
// }); //rename

// fs.unlinkSync('./newtest.txt'); // to remove

// fs.readdir('../day1_intro', (err, files) => {
//   files.forEach((file) => {
//     console.log(file);
//   });
// });

const directory = './';
const dir = fs.readdir(directory, (err, d) => {
  if (err) throw err;
  console.log(d);
});

// fs.readdirSync(directory).forEach((file) => {
//   if (fs.lstatSync(path.resolve(directory, file)).isDirectory()) {
//     console.log('Directory: ' + file);
//   } else {
//     console.log('File: ' + file);
//   }
// });

//
//
// console.log(isEven(6));

// console.log(os.cpus());

// console.log('path: ', path);
// console.log(__dirname);
// console.log(__filename);

// console.warn("Warn");
// console.error("Error");

// console.log("before");
// const content = fs.readFileSync("./test.js", {encoding : "utf-8"});
// console.log('content: ', content);
// console.log("after");

//bydefault it is asyncronous
// console.log('before');
// const content = fs.readFile('./test.js', { encoding: 'utf-8' }, (err, data) => {
//   console.log('data: ', data);
// });
// console.log('after');

//keywords
//exports
//require
//module
//__direname
//__filename

//crypto hashing
// const crypto = require('crypto');
// const secret = 'password';
// const hash = crypto
//   .createHmac('sha256', secret)
//   .update('welcome to crypto')
//   .digest('hex');
// console.log('hash: ', hash);
//password + SALT
//one way direction

// readline module to take input from user
// const readline = require('readline');
// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// reader.question('please enter you name: ', (name) => {
//   console.log(`Hello ${name}`);
//   reader.close();
// });

// npm install inquire
// const inquirer = require('inquirer');

// const questions = [
//   {
//     type: 'input',
//     name: 'name',
//     message: "What's your name?",
//   },
// ];

// inquirer.prompt(questions).then(answers => {
//   console.log(`Hi ${answers.name}!`);
// });

// fs.open('test.txt', 'w', function (err, file) {
//      if (err) throw err;
//      console.log('Saved!');
// });// create

// const content = fs.readFile('./test.txt', { encoding: 'utf-8' }, (err, data) => {
//      console.log('data: ', data);
// }); //read

// fs.writeFileSync("./new.txt", "random text");// to write
// fs.appendFileSync('./test.txt', 'data to append');// append

// fs.unlinkSync("./new.txt"); // to remove

// fs.rename('./test.txt', './newtest.txt', (err) => {
//   if (err) throw err;
//   console.log('Rename complete!');
// });//rename

// fs.readdir('../day1_intro', (err, files) => {
//   files.forEach((file) => {
//     console.log(file);
//   });
// });

// fs.readdirSync(directory).forEach((file) => {
//   if (fs.lstatSync(path.resolve(directory, file)).isDirectory()) {
//     console.log('Directory: ' + file);
//   } else {
//     console.log('File: ' + file);
//   }
// });
