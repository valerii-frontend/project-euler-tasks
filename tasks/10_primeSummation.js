function primeSummation(n) {
  const primes = [];
  for (let num = 2; num < n; num++) {
    if (isPrime(num)) {
      primes.push(num);
    }
  }
  return primes.reduce((a, c) => a + c, 0);
}

function isPrime(num) {
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
