/*
a+b+c = 24
a*b*c = 480

O(n^3)
function specialPythagoreanTriplet(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = i + 1; j <= n - 1; j++) {
      for (let k = j + 1; k <= n - 2; k++) {
        if (i + j + k === n && i * i + j * j == k * k) {
          return i * j * k;
        }
      }
    }
  }
}
*/
// O(n^2)
function specialPythagoreanTriplet(n) {
  for (let a = 1; a < n; a++) {
    for (let b = a + 1; b < n; b++) {
      const c = n - a - b;
      if (a * a + b * b === c * c) {
        return a * b * c;
      }
    }
  }
}
