/*
Complete a função de soma quadrada para que ela eleve ao quadrado cada número passado e então some os resultados.
* */

function squareSum(numbers){
    let pow = 0
    numbers.forEach((n)=>{
        return pow += n ** 2
    })

    return pow
}

console.log(squareSum([1,2]))
console.log(squareSum([]))
console.log(squareSum([0, 3, 4, 5]))