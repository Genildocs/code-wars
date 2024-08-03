/*
Escreva uma função que recebe um valor inteiro e retorne a quantidade de cada moeda para se chegar ao valor.
deve-se priorizar as moedas de maior valor (o maximo possivel de moedas de 500, depois o maximo possivel de moedas
de 100, etc)
* */

function contagemMoedas(num) {
  //moedas: 1, 5, 10, 25, 100, 500
  const moedas = { 1: 0, 5: 0, 10: 0, 25: 0, 100: 0, 500: 0 };
  const arrayDeMoedas = Object.keys(moedas).reverse();

  for (let i = 0; i < arrayDeMoedas.length; i++) {
    while (Number(arrayDeMoedas[i]) <= num) {
      num -= Number(arrayDeMoedas[i]); //Não pensei em decrementar num ate chegar a zero
      moedas[arrayDeMoedas[i]]++;
    }
  }
  return moedas;
}
console.log(contagemMoedas(478));
console.log(contagemMoedas(384));
console.log(contagemMoedas(50));
