function sumSquareDifference(n) {
  const sumOfsqrt = (n * (n + 1) * (2 * n + 1)) / 6;
  const sqrtOfsum = Math.pow(
    Array.from({ length: n }, (_, i) => i + 1).reduce((a, b) => a + b, 0),
    2
  );
  return sqrtOfsum - sumOfsqrt;
}
