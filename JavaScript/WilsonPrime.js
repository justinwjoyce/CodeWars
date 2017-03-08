// 8kyu 

// Wilson primes satisfy the following condition. Let P represent a prime number.

// Then ((P-1)! + 1) / (P * P) should give a whole number.

// Your task is to create a function that returns true if the given number is a Wilson prime.

function amIWilson(prime) {
  let r = ((factorial(prime-1) + 1) / (prime * prime));
  return r === ~~r;
}

var f = [];
function factorial (number) {
  if (number == 0 || number == 1)
    return 1;
  if (f[number] > 0)
    return f[number];
  return f[number] = factorial(number-1) * number;
}

// es6

const amIWilson = p => [5, 13, 563].indexOf(p) > -1