function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function primeSummation(n) {
  let primeSum = 0;
  for (let num = 2; num < n; num++) {
    if (isPrime(num)) {
      primeSum += num;
    }
  }
  return primeSum;
}
