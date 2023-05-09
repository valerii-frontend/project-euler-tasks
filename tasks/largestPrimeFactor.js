function largestPrimeFactor(number) {
  const arr = [];
  let counter = 2;

  while (number > 1) {
    if (number % counter === 0) {
      arr.push(counter);
      number = number / counter;
    } else {
      counter++;
    }
  }
  return Math.max(...arr);
}
