/* Uma funçaõ é first class quando ela é tratada como qualquer outra variável */
const add = function(a, b) {
  return a + b;
}

const subtract = function(a, b) {
  return a - b;
}

const multiply = (x, y) => x * y;

let x = 10;

console.log(add(10, 20));
console.log(subtract(10, 20));
console.log(multiply(10, 20));