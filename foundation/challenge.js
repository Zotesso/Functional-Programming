// Create a Range Function
// range(5) -> [1, 2, 3, 4, 5] etc...

/* The worst solution */
const range = (maxRange) => {
  const rangeArray = [];
  for (let index = 0; index <= maxRange; index++) {
    rangeArray.push(index);
  }

  return rangeArray;
}

console.log(range(55));

/* Best solution */
const getRange = (minimun, maximun, step) => {
  const firstNumber = maximun === undefined ? 1 : minimun;
  const secondNumber = maximun === undefined ? minimun : maximun;
  const stepResult = minimun <= maximun ? Math.abs(step) : -Math.abs(step);
  const rangeArray = [];
  for (let index = firstNumber; firstNumber <= secondNumber ? index <= secondNumber : index >= secondNumber; index += stepResult) {
    rangeArray.push(index);
  }

  return rangeArray;
}

console.log(getRange(5, -4, 3));
