/* Crie uma função que receba um inteiro como argumento e retorne "Even"para números pares ou "Odd"ímpares. */

function evenOrOdd(number) {
    return number % 2 === 0 ? "Even" : "Odd"
}

console.log(evenOrOdd(2))
console.log(evenOrOdd(-42))
console.log(evenOrOdd(3))
console.log(evenOrOdd(35))