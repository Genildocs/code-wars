/* Escreva o número na forma expandida
Você receberá um número e precisará retorná-lo como uma string em Expanded Form . Por exemplo:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
OBSERVAÇÃO: Todos os números serão inteiros maiores que 0. */

// 1 - Transformar o numero em string
// 2 - pegar cada numero separadamente
// 3 - Multiplicar cada dígito pelo seu valor posicional.
// 4 - Filtrar os dígitos que são zero (0).
// 5 - Combinar os resultados em uma string na forma "expandida".

function expandedForm(num) {
  // Transformar o número em string e dividir em caracteres
  const strinArray = num.toString().split("");
  // Calcular a forma expandida
  const expand = strinArray
    .map((num, index) => {
      // Calcular o valor posicional do dígito
      return num * Math.pow(10, strinArray.length - index - 1);
    })
    .filter((val) => val > 0);

  // Juntar os valores em uma string com " + " entre eles
  return expand.join(" + ");
}

console.log(expandedForm(12));
console.log(expandedForm(42));
console.log(expandedForm(70304));
