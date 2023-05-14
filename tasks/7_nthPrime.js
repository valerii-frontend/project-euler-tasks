function nthPrime(n) {
  const primes = [];
  let num = 2;
  while (primes.length < n) {
    let isPrime = true;
    for (let i = 0; i < primes.length; i++) {
      if (num % primes[i] === 0) {
        isPrime = false;
        break;
      }
    }
    isPrime && primes.push(num);
    num++;
  }
  return primes[primes.length - 1];
}
