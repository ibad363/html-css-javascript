function calculateFactorial(num){
  let factorial = 1;
  for(i=1; i<=num; i++){
    factorial*=i;
  }
  return factorial
}

const num = 6;
const factorial = calculateFactorial(num);
console.log(`the factorial of number ${num} is ${factorial}`)