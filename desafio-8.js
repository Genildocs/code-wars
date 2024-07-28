function moveZeros(arr) {
	return arr.sort().reverse()
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))