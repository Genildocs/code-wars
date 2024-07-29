/* Complete a solução para que ela divida a string em pares de dois caracteres. Se a string contiver um número ímpar de caracteres, ela deverá substituir o segundo caractere ausente do par final por um sublinhado ('_').

Exemplos:

* 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef'] */

function solution(str) {
  let palavra = str.split('');
  if (str === '') {
    return [];
  }
  let novoArray = []
  for(let x = 0; x < palavra.length; x++){
    if( x % 2 === 0){
      novoArray.push(palavra.slice(x, x + 2).join(''))
      let filters = novoArray.filter((num) =>{
        return  num.length === 1
      })

      if(filters.length === 1){
        filters.push('_')
        filters = filters.join('').split(' ').join('')
        novoArray.pop()
        novoArray.push(filters)
      }

    }
  }

  return  novoArray
}

console.log(solution('abc'));
console.log(solution('abcdef'));
console.log(solution("abcdefg"))
console.log(solution(''));
