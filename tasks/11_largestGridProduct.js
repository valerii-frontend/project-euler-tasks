function largestGridProduct(arr) {
  let max = 0;
  for (let i = 0; i < arr.length - 3; i++) {
    for (let j = 0; j < arr[i].length - 3; j++) {
      const row = arr[i][j] * arr[i + 1][j] * arr[i + 2][j] * arr[i + 3][j];
      const col = arr[i][j] * arr[i][j + 1] * arr[i][j + 2] * arr[i][j + 3];
      const diagR = arr[i][j + 3] * arr[i + 1][j + 2] * arr[i + 2][j + 1] * arr[i + 3][j];
      const diagL = arr[i][j] * arr[i + 1][j + 1] * arr[i + 2][j + 2] * arr[i + 3][j + 3];
      max = Math.max(row, col, diagL, diagR, max);
    }
  }
  return max;
}
