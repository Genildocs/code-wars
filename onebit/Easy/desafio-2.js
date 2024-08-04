/*
* Escreva uma função que recebe uma string contendo um nome completo e retorna uma string com todos os nomes, exceto
* o ultimo, abreviados e o  ultimos nome em Letras maiusculas antes das abreviações separadas por virgulas
*  */

function abreviado(arr){
    return arr.slice(0, -1).map((nome)=>{
        return nome.slice(0,1).toUpperCase()
    }).join('.');
}

function nomeAbreviado(str){
    const arrayDoNome = str.split(' ')
    const ultimoSobrenome = arrayDoNome[arrayDoNome.length-1].toUpperCase()
    const nomeAbreviado = abreviado(arrayDoNome)

    return `${ultimoSobrenome}, ${nomeAbreviado}.`
}

console.log(nomeAbreviado("John Ronald Reuel Tolkien")) // TOLKIEN, J.R.R
console.log(nomeAbreviado("Suzanne Marie Collins")) // PAOLINI, C.J
console.log(nomeAbreviado('George Raymond Richard Martin'))