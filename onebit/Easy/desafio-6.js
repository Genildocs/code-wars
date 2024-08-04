/*
Escreva uma função que recebe um numero e verificar se ele é um codigo de identificação valido segundo as regras de criação do digito
verificador. a criação do digito verificado funciona da seguinte forma:
1- Some os digitos das posições pares(impares se estiver contando a partir de 1)
2- multiplique esse resultador por 3
3- Some os digitos das posições impares(pares se estiver contando a partir de 1) do numero original e então some
esse resultado ao resultado do passo anterior
4- encontre o resto da divisão do resultado do passo anterior por 10
5- Se o resto da divisão for 0, o digito verificador é 0, do contrario o digito verificado é 10 - resto

 */

function verificacaIdentificador(number) {
    const arrayOfNumbers = number.toString().split('').map(Number);
    let sumPares = 0
    let sumImpares = 0
    for (let i = 0; i < arrayOfNumbers.length - 1; i++) {
        if(i % 2 === 0) {
            sumPares += arrayOfNumbers[i]
        }else{
            sumImpares += arrayOfNumbers[i]
        }
    }
    sumPares *= 3 // realizar fora do loop
    let totalSum = sumPares  + sumImpares
    let rest = totalSum % 10

    let digitoVerificado = rest === 0 ? 0 : 10 - rest

    return digitoVerificado === arrayOfNumbers[arrayOfNumbers.length - 1]
}

console.log(verificacaIdentificador(547020743789)) //true
console.log(verificacaIdentificador(301354030348)) // true
console.log(verificacaIdentificador(301354030349)) // false
console.log(verificacaIdentificador(123456789872)) // false

