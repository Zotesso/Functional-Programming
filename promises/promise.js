/* Callback Hell */
setTimeout(() => {
  console.log('executando...');
  setTimeout(() => {
    console.log('executando...');
    setTimeout(() => {
      console.log('executando...');
    }, 2000);
  }, 2000);
}, 2000);

/* Promise */

const waitFor = (time = 2000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Executando...');
      resolve('Executou');
    }, time);
  });
}

waitFor(3000).then(res => console.log(res));

waitFor()
  .then(() => waitFor())
  .then(waitFor);