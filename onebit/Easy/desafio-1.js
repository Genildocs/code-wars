/*função recebe um array bidimensional de inteiros. retornar um unico array
contendo todos os elementos em ordem ascendente
 */

function alteraArray(arr) {
  const uniqueArray = arr
    .join(' ')
    .split(' ')
    .join(',')
    .split(',')
    .sort((a, b) => a - b)
    .map((num) => Number(num));
  return uniqueArray;
}

console.log(
  alteraArray([
    [100, 50],
    [60, 100],
    [20, 100],
    [10, 40, 80, 90],
  ])
);
console.log(
  alteraArray([
    [1, 3],
    [4, 8],
    [7, 5],
    [2, 6],
  ])
);
