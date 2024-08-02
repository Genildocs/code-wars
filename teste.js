// function persistente(num){
// 	let count = 0
// 	while (num >= 10){
// 		let arrayTransform = num.toString().split('')
// 		num = arrayTransform.reduce((acc, curr) =>{ return acc *  curr},1)
//
// 		count ++
// 	}
//
// 	return count
// }
//
// console.log(persistente(15000))


function nomeAbreviado(str){
	let arr = str.split(' ')

	arr = arr.find((x, idx) =>{
		return x.charAt(1).toUpperCase()
	})

	return arr;

}

console.log(nomeAbreviado("John Ronald Reuel Tolkien"))