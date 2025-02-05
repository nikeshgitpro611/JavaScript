const memoizedFibonacci = () => {
  let cache = {}; // Stores computed values
  return (fib = (n) => {
   if(n in cache) return cache[n];
   return n <= 1 ? n : cache[n] = fib(n -1) + fib(n - 2)
  });
};

const fibonacci = memoizedFibonacci();
console.log(fibonacci(10)); // 55
