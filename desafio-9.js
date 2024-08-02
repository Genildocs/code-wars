/* A ideia principal é contar todos os caracteres que ocorrem em uma string. Se você tem uma string como aba,
então o resultado deve ser {'a': 2, 'b': 1}.
E se a string estiver vazia? Então o resultado deve ser literal de objeto vazio, {}.*/

function count(string) {
	if(string === '')return {}

	const count = new Map()
	for(let str of string){
		if(count.has(str)){
			count.set(str, count.get(str) + 1)
		}else{
			count.set(str, 1)
		}
	}

	let objetcCount = {}
	for(let [key, value] of count.entries()){
		objetcCount[key] = value

	}
	return objetcCount
}

console.log(count(''))
console.log(count('a'))
console.log(count('aba'))
console.log(count('ab'))
console.log(count('ABC'))
