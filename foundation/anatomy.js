// Function Declaration

function doSomething() {
  console.log('Hello');
}

doSomething();

// ----------------------------------------------
// Anonymous Function
(function () {
  console.log('Anonymous function');
})

// ----------------------------------------------
// Function Expression

const sum = function (firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

const result = sum(7, 8);
console.log(result);

/* É possível atribuiar a uma constante outra função já criada */
const anotherSum = sum;
console.log(anotherSum(7, 8));

// ----------------------------------------------
// Arrow Function
const incrementFunctionExpression = function(value) {
  return value + 1;
}

/* Arrow Function -> Sempre é uma função anonima */
const incrementArrowFunction = (value) => {
  return value + 1;
}

/* Não é necessário retun quando não se tem par de chaves,
   em uma linha será retornado tudo que estiver na linha sem necessidade de return
*/
const incrementArrowFunctionInline = value => value + 1;

// ----------------------------------------------
// IIFE - Immediately Invoked Function Expression

(function (a, b, c) {
  console.log(`Result ${a + b + c}`)
})(1, 2, 3);

(() => {
  console.log('Arrow IIFE')
})();

(() => console.log('One line Arrow IIFE'))();