const numbers = [1, 2, 3, 4, 5];

const numbersMultipliedByTwo = numbers.map(number => number * 2);

const scores = [
  { name: 'Joãozin', score: 6.4 },
  { name: 'Pedrin', score: 8.2 },
  { name: 'Cecilia', score: 9.0 }
]

const getScore = el => el.score;

scores.map(getScore);

console.log(
  scores
    .map(getScore)
    .map(Math.ceil)
)