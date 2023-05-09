function multiplesOf3and5(number) {
  const sum3 = sumMultiplies(number, 3);
  const sum5 = sumMultiplies(number, 5);
  const sum15 = sumMultiplies(number, 15);
  const result = sum3 + sum5 - sum15;
  return result;
}

function sumMultiplies(n, divider) {
  const multiple = Math.floor((n - 1) / divider);
  const sum = (divider * multiple * (multiple + 1)) / 2;
  return sum;
}

console.log(multiplesOf3and5(10)); //23
console.log(multiplesOf3and5(100)); //2318
console.log(multiplesOf3and5(1000)); //233168
