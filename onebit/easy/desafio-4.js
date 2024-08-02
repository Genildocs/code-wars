/* 
Escreva uma função que recebe um par ordenado (x,y) e retorne um array de pares (x,y) onde cada um deles possui x e y menor
ou igual ao par recebido em ordem crescente. Os pares devem ser ordenados de forma que o primeiro aumente o valor de y e depois
o valor de x. Apenas o quadrante onde x e y são positivos deve ser considerados.
*/

// 1 - o novo arra precisa que x e y sejam menor ou igual aos valores recebidos em ordem crescente. exemplo: 2 -> 0, 1, 2
// 2 - primeiro aumentar o valor de y e depois de x

function ordenacao(arr) {
  let x = [];
  let y = [];
  for (let i = 0; i < arr.length; i++) {
    // if(arr[i]){
    //   y.push(0, i + 1);
    // }
    console.log(i);
  }
}

console.log(ordenacao([2, 2]));
console.log(ordenacao([2, 7]));
