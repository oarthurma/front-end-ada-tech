const fs = require('fs');

// 1. Lendo um arquivo JSON.

// fs.readFile('.eslintrc.json', (erro, dados) => {
//   if (erro) {
//     console.log('Erro', erro);
//   } else {
//     // dados: Buffer com os dados do arquivo json
//     const dadosObjeto = JSON.parse(String(dados)); // convertendo o Buffer em um objeto do JS

//     console.log(dadosObjeto.rules);
//   }
// });

// Convertendo JSON, em formato de string, para um objeto.

const jsonString = '{"nome": "Walisson"}';

console.log(JSON.parse(jsonString));

// Convertendo um objeto do JS, em um JSON (string).

console.clear();

const pessoa = {
  nome: 'Tony Stark',
  papel: 'Homem de Ferro',
};

console.log(JSON.stringify(pessoa));
