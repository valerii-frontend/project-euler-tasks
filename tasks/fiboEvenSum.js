function fiboEvenSum(n) {
  const fib = [1, 1];
  let result = 0;
  let current = 0;
  let prev = 0;
  let next = 1;
  while (current < n) {
    current = fib[prev] + fib[next];
    fib.push(current);
    if (current % 2 === 0) {
      result += current;
    }
    prev++;
    next++;
  }
  console.log(next);
  return result;
}
/*
fiboEvenSum(10); // 10.
fiboEvenSum(34); // 44.
fiboEvenSum(60); // 44.
fiboEvenSum(1000); // 798.
fiboEvenSum(100000); // 60696.
fiboEvenSum(4000000); // 4613732.
*/
/*
MATH SOLUTION O(log(n))
*/

function _fiboEvenSum(n) {
  if (n < 2) {
    return 0;
  }
  let sum = 0;
  let fib1 = 0;
  let fib2 = 2;
  while (fib2 <= n) {
    sum += fib2;
    let nextFib = 4 * fib2 + fib1;
    fib1 = fib2;
    fib2 = nextFib;
  }
  return sum;
}
