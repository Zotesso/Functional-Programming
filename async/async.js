const waitFor = (time = 2000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Executando...');
      resolve('Executou');
    }, time);
  });
}

const exec = async() => {
  await waitFor(2000);
  console.log('async com await')
}

exec();