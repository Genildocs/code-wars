/* Escreva uma função que recebe uma string e retorna a maior letra segundo a ordem alfabetica em minusculo
assuma que a string nao possui nenhuma letra com acento ou caractere especial, apenas letras e espaços.
 */

function maiorLetra(str) {
  let arrayString = str.split('');
  const alfabeto = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  let maiorLetra = '';
  let maxSoma = 0;
  for (let palavra of arrayString) {
    let somaPalavra = 0;
    for (let char of palavra) {
      somaPalavra += alfabeto.indexOf(char) + 1;
    }

    if (somaPalavra > maxSoma) {
      maxSoma = somaPalavra;
      maiorLetra = palavra;
    }
  }

  return maiorLetra;
}

console.log(maiorLetra('Hello'));
console.log(maiorLetra('Lorem ipsum dolore sec avanti'));
