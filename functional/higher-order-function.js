/* Higher order functions operam em outras funções, seja como argumento ou como retorno */

function run(fn) {
  fn();
}

function sayHello() {
  console.log('Hello');
}

run(sayHello);

function finalPrice(tax, price) {
  return function(price) {
    return price * (1 + tax);
  }
}

const nycFinalPrice = finalPrice(0.0875);

console.log(nycFinalPrice(24.1));
