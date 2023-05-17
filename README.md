# Project Euler

### [Free code camp](https://www.freecodecamp.org/learn/project-euler/)

## About

<div align="center">

Project Euler is a website that hosts a collection of challenging computational and mathematical problems. The project was created by Colin Hughes in 2001 and named after the famous mathematician Leonhard Euler.

The problems on Project Euler range in difficulty from relatively easy to extremely difficult, and require a combination of mathematical insight and programming skill to solve. Many of the problems involve finding patterns or mathematical properties of numbers, while others require creative algorithms or complex computations.

Project Euler is popular among mathematicians, computer scientists, and hobbyists who enjoy solving challenging problems. The website also provides a forum where users can discuss solutions and techniques for solving the problems.

</div>

> Complete the programming challenges below, from the massive Project Euler archives. These will harden your algorithm and mathematics knowledge.

> These problems range in difficulty and, for many, the experience is inductive chain learning. That is, by solving one problem, it will expose you to a new concept that allows you to undertake a previously inaccessible problem. Can you finish them all?

## List

1. [Problem 1: Multiples of 3 and 5](#problem-1-multiples-of-3-and-5) - **_[SOLUTION](/tasks/1_multiplesOf3and5.js)_**
2. [Problem 2: Even Fibonacci Numbers](#problem-2-even-fibonacci-numbers) - **_[SOLUTION](tasks/2_fiboEvenSum.js)_**
3. [Problem 3: Largest prime factor](#problem-3-largest-prime-factor) - **_[SOLUTION](tasks/3_largestPrimeFactor.js)_**
4. [Problem 4: Largest palindrome product](#problem-4-largest-palindrome-product) - **_[SOLUTION](tasks/4_largestPalindromeProduct.js)_**
5. [Problem 5: Smallest multiple](#problem-5-smallest-multiple) - **_[SOLUTION](tasks/5_smallestMultiple.js)_**
6. [Problem 6: Sum square difference](#problem-6-sum-square-difference) - **_[SOLUTION](tasks/6_sumSquareDifference.js)_**
7. [Problem 7: 10001st prime](#problem-7-10001st-prime) - **_[SOLUTION](tasks/7_nthPrime.js)_**
8. [Problem 8: Largest product in a series](#problem-8-largest-product-in-a-series) - **_[SOLUTION](tasks/8_largestProductinaSeries.js)_**
9. [Problem 9: Special Pythagorean triplet](#problem-9-special-pythagorean-triplet) - **_[SOLUTION](tasks/9_specialPythagoreanTriplet.js)_**
10. [Problem 10: Summation of primes](#problem-10-summation-of-primes) - **_[SOLUTION](tasks/10_primeSummation.js)_**

## Problem 1: Multiples of 3 and 5

If we list all the natural numbers below 10 that are multiples of **3** or **5**, we get **3, 5, 6** and **9**. The sum of these multiples is `23`.

Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

### Output examples

```javascript
multiplesOf3and5(10); //23
multiplesOf3and5(100); //2318
multiplesOf3and5(1000); //233168
```

## Problem 2: Even Fibonacci Numbers

Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

`1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...`

By considering the terms in the Fibonacci sequence whose values do not exceed n, find the sum of the even-valued terms.

### Output examples

```javascript
fiboEvenSum(10); // 10.
fiboEvenSum(34); // 44.
fiboEvenSum(60); // 44.
fiboEvenSum(1000); // 798.
fiboEvenSum(100000); // 60696.
fiboEvenSum(4000000); // 4613732.
```

## Problem 3: Largest prime factor

The prime factors of `13195` are `5, 7, 13` and `29`.

What is the largest prime factor of the given number?

### Output examples

```javascript
largestPrimeFactor(2); // a number.
largestPrimeFactor(2); // 2.
largestPrimeFactor(3); // 3.
largestPrimeFactor(5); // 5.
largestPrimeFactor(7); // 7.
largestPrimeFactor(8); // 2.
largestPrimeFactor(13195); // 29.
largestPrimeFactor(600851475143); // 6857.
```

## Problem 4: Largest palindrome product

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is `9009 = 91 × 99`

Find the largest palindrome made from the product of two n-digit numbers.

### Output examples

```javascript
largestPalindromeProduct(2); // a number.
largestPalindromeProduct(2); // 9009.
largestPalindromeProduct(3); // 906609.
```

## Problem 5: Smallest multiple

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from `1 to n`?

### Output examples

```javascript
smallestMult(5); // number.
smallestMult(5); //60.
smallestMult(7); //420.
smallestMult(10); // 2520.
smallestMult(13); // 360360.
smallestMult(20); // 232792560.
```

## Problem 6: Sum square difference

The sum of the squares of the first ten natural numbers is,

`12 + 22 + ... + 102 = 385`
The square of the sum of the first ten natural numbers is,

`(1 + 2 + ... + 10)2 = 552 = 3025`
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is `3025 − 385 = 2640`

Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.

### Output examples

```javascript
sumSquareDifference(10); // number.
sumSquareDifference(10); // 2640.
sumSquareDifference(20); // 41230.
sumSquareDifference(100); // 25164150.
```

## Problem 7: 10001st prime

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the nth prime number?

### Output examples

```js
nthPrime(6); // number.
nthPrime(6); // 13
nthPrime(10); // 29.
nthPrime(100); // 541.
nthPrime(1000); // 7919.
nthPrime(10001); // 104743.
```

## Problem 8: Largest product in a series

The four adjacent digits in the 1000-digit number that have the greatest product are `9 × 9 × 8 × 9 = 5832.`

        73167176531330624919225119674426574742355349194934
        96983520312774506326239578318016984801869478851843
        85861560789112949495459501737958331952853208805511
        12540698747158523863050715693290963295227443043557
        66896648950445244523161731856403098711121722383113
        62229893423380308135336276614282806444486645238749
        30358907296290491560440772390713810515859307960866
        70172427121883998797908792274921901699720888093776
        65727333001053367881220235421809751254540594752243
        52584907711670556013604839586446706324415722155397
        53697817977846174064955149290862569321978468622482
        83972241375657056057490261407972968652414535100474
        82166370484403199890008895243450658541227588666881
        16427171479924442928230863465674813919123162824586
        17866458359124566529476545682848912883142607690042
        24219022671055626321111109370544217506941658960408
        07198403850962455444362981230987879927244284909188
        84580156166097919133875499200524063689912560717606
        05886116467109405077541002256983155200055935729725
        71636269561882670428252483600823257530420752963450

Find the `n` adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?

### Output examples

```js
largestProductinaSeries(4); // number
largestProductinaSeries(4); // 5832
largestProductinaSeries(13); // 23514624000
```

## Problem 9: Special Pythagorean triplet

A Pythagorean triplet is a set of three natural numbers, `a < b < c`, for which,

`a^2 + b^2 = c^2`
For example, `32 + 42 = 9 + 16 = 25 = 52.`

There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that `a + b + c = n.`

### Output examples

```js
specialPythagoreanTriplet(24); //  number.
specialPythagoreanTriplet(24); // 480.
specialPythagoreanTriplet(120); // 49920, 55080 or 60000
specialPythagoreanTriplet(1000); // 31875000
```

## Problem 10: Summation of primes

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below n.

### Output examples

```js
primeSummation(17); //a number.
primeSummation(17); //41.
primeSummation(2001); //277050.
primeSummation(140759); //873608362.
primeSummation(2000000); //142913828922.
```
