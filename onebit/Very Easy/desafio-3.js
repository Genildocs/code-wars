/* escreva uma função que recebe um numero qualquer inteiro , eleve ao quadrado cada um de seus algarismo e depois
concatene o resultado retornando um unico numero inteiro
 */

function concateNumbers(num){
	const numConvertidoEmString = num.toString().split('')
	const concatenado = numConvertidoEmString.map((num)=>{
		return num ** 2
	}).join('')

	return Number(concatenado)

}

console.log(concateNumbers(3514))
console.log(concateNumbers(94571))
console.log(concateNumbers(24))