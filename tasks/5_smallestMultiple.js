function greatestCommonDivisor(num1, num2) {
  while (num2) {
    let temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
}

function leastCommonMultiple(num1, num2) {
  return (num1 * num2) / greatestCommonDivisor(num1, num2);
}

function smallestMult(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = leastCommonMultiple(result, i);
  }
  return result;
}
