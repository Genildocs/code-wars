/*Escreva um algoritmo que pegue uma matriz e mova todos os zeros para o final, preservando a ordem dos outros elementos.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0] */

function moveZeros(arr) {
	let elementToMove = 0
	// Filtra os elementos que não são iguais ao elemento especificado
	let filterArr = arr.filter((elem)=> elem !== elementToMove)
	// Conta quantas vezes o elemento especificado aparece no array original
	let count = arr.length - filterArr.length
	// Adiciona o elemento especificado no final do array filtrado
	let resultArr = filterArr.concat(Array(count).fill(elementToMove))
	return resultArr
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))