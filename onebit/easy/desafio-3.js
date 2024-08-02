/*
Escreva uma função que recebe uma string , verifica se ela possui a mesma quantidade de cada letra que a compoe
e retorna true caso possua e false caso não possua
 */

function verificaQuantidadeDeLetra(str) {
  const frequencia = new Map();
  let count = {};
  for (let letra of str) {
    if (frequencia.has(letra)) {
      frequencia.set(letra, frequencia.get(letra) + 1);
    } else {
      frequencia.set(letra, 1);
    }
  }

  for (let [key, value] of frequencia.entries()) {
    count[key] = value;
  }
}

console.log(verificaQuantidadeDeLetra('ssd')); // false
// console.log(verificaQuantidadeDeLetra('Lorem ipsum')) //false
// console.log(verificaQuantidadeDeLetra('This is Thee')) // true
