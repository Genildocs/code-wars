/* Complete a solução para que ela divida a string em pares de dois caracteres. Se a string contiver um número ímpar de caracteres, ela deverá substituir o segundo caractere ausente do par final por um sublinhado ('_').

Exemplos:

* 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef'] */

function solution(str) {
  if (str === '') {
    return `return is []`;
  }

  let palavra = [];
  if (str.length % 2 === 0) {
    palavra.push(str.split(' ').slice(0, 2));
    palavra.push(str.split(' ').slice(2, 4));
    palavra.push(str.split(' ').slice(4, 6));
  }

  return palavra;
}

console.log(solution('abcdef'));
// console.log(solution("abcdefg"))
console.log(solution(''));
