function findUniq(arr) {
   const numFrequency = new Map()

    // Contagem de frequência de cada número
   for(let num of arr){
       if(numFrequency.has(num)){ //verifica se a chave existe no map
          numFrequency.set(num, numFrequency.get(num) +1 )
       }else{
           numFrequency.set(num, 1) //Não existindo é inserida
       }
   }

    // Encontrar o número com frequência 1
   for (let[num,count] of numFrequency){
       if(count === 1){
           return num
       }
   }


}

console.log(findUniq([ 1, 0, 0 ]))
console.log(findUniq([ 1, 0, 2 ]))
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))