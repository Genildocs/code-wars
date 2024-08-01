function deleteNth(arr, n) {
  let arrMap = new Map();
  let newArr = [];
  for (let num of arr) {
    if (arrMap.has(num)) {
      arrMap.set(num, arrMap.get(num) + 1);
    } else {
      arrMap.set(num, 1);
    }
  }

  for (let [key, value] of arrMap.entries()) {
    if ((key, value > n)) {
      arrMap = arrMap.set(key, (value = n));
    }
  }

  for (let num of arr) {
    if (newArr.filter((x) => x === num).length < arrMap.get(num)) {
      newArr.push(num);
    }
  }

  return newArr;
}

console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3));
console.log(deleteNth([10, 21, 30, 10], 1));
