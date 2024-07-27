function findUniq(arr) {
   let sum = {}
    let acc = 0
   for (let i = 0; i < arr.length; i++){
       sum[arr[i]] ={
           q : i
       }

   }

    console.log(sum)


}
findUniq([ 1, 0, 0 ])
findUniq([ 1, 0, 2 ])
findUniq([ 1, 1, 1, 2, 1, 1 ])