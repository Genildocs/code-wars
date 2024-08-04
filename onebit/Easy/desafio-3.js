/*
Escreva uma função que recebe uma string , verifica se ela possui a mesma quantidade de cada letra que a compoe
e retorna true caso possua e false caso não possua
 */

function verificaQuantidadeDeLetra(str) {
  const frequencia = new Map();
  let count = [];
  for (let letra of str) {
    if (frequencia.has(letra)) {
      frequencia.set(letra, frequencia.get(letra) + 1);
    } else {
      frequencia.set(letra, 1);
    }
  }

  for (let values of frequencia.values()) {
    count.push(values);
  }

  return count.every((count, index, arrray) =>
    index !== 0 ? count === arrray[index - 1] : true
  );

  //Object.values transforma o objeto em um array contendo apenas o valores , o metodo every verifica se existe valores diferente e iguais.
  // return Object.values(count).every((count, index, array) =>
  //   index !== 0 ? count === array[index - 1] : true
  // );
}

console.log(verificaQuantidadeDeLetra('ssd')); // false
console.log(verificaQuantidadeDeLetra('Lorem ipsum')); //false
console.log(verificaQuantidadeDeLetra('This is Thee')); // true
