function XO(str) {
	const newString = str.toLowerCase()
	const frequency = new Map()
	for(let str of newString){
		if(frequency.has(str)){
			frequency.set(str, frequency.get(str) + 1)
		}else{
			frequency.set(str, 1)
		}
	}

	if(frequency.get('x') === frequency.get('o')){
		return true
	}else {
		return false
	}
}

console.log(XO('xo'))
console.log(XO("xxOo"))
console.log(XO("xxxm"))
console.log(XO("Oo"))
console.log(XO("ooom"))