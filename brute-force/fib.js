const fib = (n) => {
  // base case
  if (n <= 2) return 1;
  
  return fib(n - 1) + fib(n - 2);
};

console.log(fib(7)); //13
console.log(fib(50)); //12586269025
