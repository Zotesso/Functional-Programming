const fs = require('fs');
const path = require('path')



const writeFileOnScreen = (path) => {
  return new Promise((resolve) => {
      console.log('Executando...');
      fs.readFile(path, {}, (error, content) => {
        resolve(content.toString());
      });
  });
}

const absolutePath = path.join(__dirname, 'dados.txt');
writeFileOnScreen(absolutePath).then((result) => console.log(result.toString()));