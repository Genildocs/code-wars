function findOdd(a) {
	const frequencyImpar = new Map()
	for(let num of a){
		if(frequencyImpar.has(num)){
			frequencyImpar.set(num, frequencyImpar.get(num) + 1)
		}else{
			frequencyImpar.set(num , 1)
		}
	}

	for(let[key, value] of frequencyImpar.entries()){
		if(value % 2 === 1){
			return key
		}
	}

	return 0;
}

console.log(findOdd([7]))
console.log(findOdd([1,1,2]))
console.log(findOdd([0,1,0,1,0]))
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))