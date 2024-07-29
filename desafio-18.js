/*Neste desafio, você receberá uma matriz de inteiros positivos, por exemplo, [1,2,3,4,5]e outro inteiro positivo, como 100chamado total. Para a matriz, você deve adicionar os números (1 e 2 se tornam 1+2), subtrair os números (1 e 2 se tornam 1-2) ou combiná-los (1 e 2 se tornam 12) com o objetivo de criar uma equação em que a solução final seja o total fornecido. Um exemplo seria:

Dada a matriz [1,2,3,4,5,6,7,8,9] e o total de 100

uma equação seria 12+3-4+5+67+8+9 que é igual a 100
outra equação seria 1+2+34-5+67-8+9 que também é igual a 100
O valor de retorno desta função deve ser o número de equações dos números na matriz que correspondem ao total.

ex. addsTo([1,2,3,4,5], 15)// retorna 2 (porque 1+2+3+4+5 = 15e 1+23-4-5 = 15)

ex. addsTo([3,4,5,6,7,8], 65)// retorna 0

ex. addsTo([1,2,3,4,5,6,7,8,9], 100)// retornar 11 porque 12+3+4+5-6-7+89 = 100e 10 outros

ANOTAÇÕES IMPORTANTES :

Não altere a ordem dos números.
Não há limite para o comprimento da matriz.
Não use zeros à esquerda, então [1,2,3,0,2,3] deve retornar 2: 123 - 0 - 23e 123 + 0 - 23mas NÃO 123 - 023 .
Para um desafio adicional, tente completar isso sem usareval */

function addsTo(arr, total) {
	return 0;
}

console.log(addsTo([1,2,3,4,5,6,7,8,9], 100))
console.log(addsTo([1,2,3,4,5,6,7], 100))
console.log(addsTo([1,2,3,4,5], 15))
console.log(addsTo([1,1,1,1,1], 10))
console.log(addsTo([1,2,3,0,2,3], 100))