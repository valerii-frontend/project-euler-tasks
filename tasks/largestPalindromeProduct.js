function isPalindrome(n) {
  const str = "" + n;
  const reverseStr = [...str].reverse().join("");
  return str === reverseStr;
}
function largestPalindromeProduct(n) {
  const max = Number("9".repeat(n));
  const min = 10 ** (n - 1);
  let result = 0;
  for (let i = max; i >= min; i--) {
    for (let j = max; j >= i; j--) {
      const product = i * j;
      if (product < result) {
        break;
      }
      if (isPalindrome(product) && product > result) {
        result = product;
      }
    }
  }

  return result;
}
