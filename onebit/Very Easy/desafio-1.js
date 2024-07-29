/*Escreva uma função que recebe um numero qualquer de numeros inteiros como argumentos e retone a media aritmetica entre eles */

function mediaAritmetica(arr){
	let media = arr.reduce((acc, curr)=> {
		return acc + curr
	},0) / arr.length

	return `A media aritmética é ${media}`
}

console.log(mediaAritmetica([10,9,6,8,9,1,5,7]))
console.log(mediaAritmetica([2,5,7,1,-2]))
console.log(mediaAritmetica([25,75]))