// add, sub, mult, divide, sin, cos, tan, random
const crypto = require('crypto');

const sum = (a, b) => {
  return a + b;
};
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const divide = (a, b) => a / b;
const sin = (n) => Math.sin(n);
const cos = (n) => Math.cos(n);
const tan = (n) => Math.tan(n);
const randomIntFun = () => crypto.randomInt(11);
const randomIntFunInLim = () => crypto.randomInt(10, 20);

module.exports = {
  sum,
  sub,
  mul,
  divide,
  sin,
  cos,
  tan,
  randomIntFun,
  randomIntFunInLim,
};
