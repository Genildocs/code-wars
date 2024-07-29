/* função que recebe uma string e retorna cada palavra invertida sem alterar a ordem e retornar em minuscula. */

function inverteString(str){
	const arrayString = str.toLowerCase().split(' ').map((str)=>  str.split('').reverse().join('')
	).join(' ')
	
	return arrayString
}
console.log(inverteString('It s over nine thousand'))
console.log(inverteString('Lorem ipsum dolore sec avanti'))