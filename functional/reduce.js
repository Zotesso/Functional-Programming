const numbers = [1, 2, 3, 4, 5, 6];

const sumAllNumbers = (total, el) => total + el;

console.log(numbers.reduce(sumAllNumbers));