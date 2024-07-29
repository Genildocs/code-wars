/* Escreva uma função que recebe um array e retorne um novo array com todas as posições invertidas do original sem altera-lo.
Não uitlize os metodos do objeto global(rever, map, foreach, etc)
 */

function novoArray(arr){
	let arryInvertido = []
	for(let i=  arr.length - 1; i >= 0; i--){
		arryInvertido.push(arr[i])
	}
	return arryInvertido
}
console.log(novoArray([0,9,6,8,9,1,5,7]))
console.log(novoArray(['Oh','Hi','Mark']))