function digitalRoot(n) {
  let numberForString = n.toString();
  let arrayString = []
  for(let i = 0; i < numberForString.length; i++){
    arrayString.push(Number(numberForString[i]))

  }
  return arrayString.reduce((acc, curr) => acc + curr, 0)
}

console.log(digitalRoot(16));
console.log(digitalRoot(942))