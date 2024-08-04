/* 
Escreva uma função que recebe um par ordenado (x,y) e retorne um array de pares (x,y) onde cada um deles possui x e y menor
ou igual ao par recebido em ordem crescente. Os pares devem ser ordenados de forma que o primeiro aumente o valor de y e depois
o valor de x. Apenas o quadrante onde x e y são positivos deve ser considerados.
*/

// 1 - o novo arra precisa que x e y sejam menor ou igual aos valores recebidos em ordem crescente. exemplo: 2 -> 0, 1, 2
// 2 - primeiro aumentar o valor de y e depois de x

function ordenacao(arr) {
  let arrayDePares = [];

  for (let i = 0; i <= arr[0]; i++) {
    for (let j = 0; j <= arr[1]; j++) {
      arrayDePares.push([i, j]);
    }
  }

  return arrayDePares;
}

console.log(ordenacao([2, 2]));
console.log(ordenacao([2, 7]));
console.log(ordenacao([2, -7]));
console.log(ordenacao([7, 6]));
