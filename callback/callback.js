function exec(fn, a, b) {
  return fn(a, b);
}

const sum = (x, y) => console.log(x + y);
const sub = (x, y) => console.log(x - y);

exec(sum, 56, 38)
exec(sub, 182, 27)

setInterval(() => {
  console.log('callback');
}, 5000);

const fs = require('fs');
const path = require('path')

const showContent = (err, content) => {
  console.log(content.toString());
}

const absolutePath = path.join(__dirname, 'dados.txt');
fs.readFile(absolutePath, {}, showContent);

