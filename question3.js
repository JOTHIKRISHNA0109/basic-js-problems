//3. Write a program to find the factorial of a number.


function factorial(number) {
  let factorial = 1;
  for (let i=1;i<=number;i++) {
      factorial*=i;
  }
  return factorial
}

function main() {
    let number = 5; //input value
    let result = factorial(number);
    console.log(result);
}

main()
