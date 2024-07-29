/*Escreva uma função, persistence, que recebe um parâmetro positivo nume retorna sua persistência multiplicativa, que é o número de vezes que você deve multiplicar os dígitos numaté chegar a um único dígito.

Por exemplo (Entrada --> Saída) :

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
4 --> 0 (because 4 is already a one-digit number, there is no multiplication) */

function persistence(num) {
  let numOfString = num.toString().split("");
}

console.log(persistence(39)); //result 3
console.log(persistence(4)); //result 0
console.log(persistence(25));
console.log(persistence(999)); //result 4
