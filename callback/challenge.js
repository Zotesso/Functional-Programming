const car = [
  { name: 'Caneta', amount: 10, price: 6.55, fragile: true},
  { name: 'Impressora', amount: 1, price: 640.55, fragile: true},
  { name: 'Caderno', amount: 4, price: 26.55, fragile: false},
  { name: 'Lapis', amount: 3, price: 5.55, fragile: false},
]


/*  Desafio: Fragil = true, pegar quantidade e preço, gerar media dos totais*/

const getFragile = (item) => item.fragile === true;

console.log(car.filter(getFragile));

const getAmountAndPrice = (item) => item.amount * item.price;

console.log(car.map(getAmountAndPrice));


const getAvarage = (acc, item) => {
  const newAmount = acc.amount + 1;
  const newTotal = acc.total + item;
  return {
    amount: newAmount,
    total: newTotal,
    avarage: newTotal / newAmount
  }
}

console.log(
  car
    .filter(getFragile)
    .map(getAmountAndPrice)
    .reduce(getAvarage, { amount: 0, total: 0, avarage: 0})
)