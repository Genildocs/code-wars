/* Dada uma sequência de palavras, você precisa encontrar a palavra com maior pontuação.

Cada letra de uma palavra marca pontos de acordo com sua posição no alfabeto: a = 1, b = 2, c = 3etc.

Por exemplo, a pontuação de abadé 8(1 + 2 + 1 + 4).

Você precisa retornar a palavra com maior pontuação como uma string.

Se duas palavras tiverem a mesma pontuação, retorne a palavra que aparecer primeiro na string original.

Todas as letras serão minúsculas e todas as entradas serão válidas. */

function high(x) {
  let palavra = new Map();
  const alfabeto = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  // Remove todos os espaços, juntando todas as palavras
  for (let str of x.replaceAll(" ", "")) {
    if (palavra.has(str)) {
      palavra.set(str, palavra.get(str) + 1);
    } else {
      palavra.set(str, 1);
    }
  }

  let somaPalavra = 0;
  for (let [key, value] of palavra.entries()) {
    for (let i = 0; i < alfabeto.length; i++) {
      if (key === alfabeto[i]) {
        // Soma a posição duas vezes (não correto)
        somaPalavra = i + 1 + (i + 1);
      }
      // Retorna na primeira vez que encontra um valor maior que 1
      if (value > 1) {
        return key;
      }
    }
  }
}

// console.log(high("abad"));
// console.log(high('aa b'))
// console.log(high('aaa b'))
// console.log(high('take me to semynak'))

console.log("*****************************");
//Corrigindo
// 1 - Calcular a soma das posições alfabéticas de cada palavra.
// 2 - Retornar a palavra com a maior soma.

function high(x) {
  //dividir a string em palavras
  let palavra = x.split(" ");
  const alfabeto = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let maxPalavra = "";
  let maxSoma = 0;
  for (let str of palavra) {
    let somaPalavra = 0;
    for (let char of str) {
      //indexOF = Localiza a primeira ocorrência de um determinado elemento dentro do array e retorna seu
      // índice
      somaPalavra += alfabeto.indexOf(char) + 1;
    }
    // Comparar com a soma máxima e atualizar se necessário
    if (somaPalavra > maxSoma) {
      maxSoma = somaPalavra;
      maxPalavra = str;
    }
  }

  return maxPalavra;
}

console.log(high("abad"));
console.log(high("aa b"));
console.log(high("aaa b"));
console.log(high("take me to semynak"));
console.log(high("what time are we climbing up the volcano"));
