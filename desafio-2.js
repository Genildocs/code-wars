function findEvenIndex(arr) {
    const totalSum = arr.reduce((acc, curr) => {
        return acc + curr
    }, 0)
    let leftSum = 0
    for (let i = 0; i < arr.length; i++) {

        if (leftSum === (totalSum - leftSum - arr[i])) {

            return i;
        }
        leftSum += arr[i];

    }
    return -1

}
console.log(findEvenIndex([1,2,3,4,3,2,1]))
console.log(findEvenIndex([1,100,50,-51,1,1]))
console.log(findEvenIndex([1,2,3,4,5,6]))