/* Crie uma função que pegue um array de strings e retorne um array com apenas as strings que têm números. Se não houver strings contendo números, retorne um array vazio.

Exemplos
numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]

numInStr(["abc", "abc10"]) ➞ ["abc10"]

numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]

numInStr(["this is a test", "test1"]) ➞ ["test1"]
Notas
As strings podem conter espaços em branco ou qualquer tipo de caractere.
Bônus: tente resolver isso sem RegEx. */

//1-filtrar as string com numeros
//2-string sem numeros retorno um array vazio

function numInStr(arr) {
  let contemNumber = [];
  for (let str of arr) {
    for (let num of str) {
      if (Number(num)) {
        contemNumber.push(str);
      }
    }
  }

  return contemNumber;
}
console.log(numInStr(['1a', 'a', '2b', 'b']));
console.log(numInStr(['abc', 'acb10']));
console.log(numInStr(['this is a test', 'test1']));
