function persistente(num){
	let count = 0
	while (num >= 10){
		let arrayTransform = num.toString().split('')
		num = arrayTransform.reduce((acc, curr) =>{ return acc *  curr},1)

		count ++
	}

	return count
}

console.log(persistente(999))