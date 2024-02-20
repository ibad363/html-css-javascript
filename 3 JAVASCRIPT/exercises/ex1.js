function calculateSum(num){
  let sumOfTotal = 0;
  for(i=0;i<=num;i++){
    sumOfTotal += i;
  }
  return sumOfTotal
}

const num = 10;
const sumOfTotal = calculateSum(num)
console.log(`The sum of numbers from 1 to ${num} is: ${sumOfTotal}`)