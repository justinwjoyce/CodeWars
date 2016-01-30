// 5kyu
// We need prime numbers and we need them now!

// Write a method that takes a maximum bound and returns all primes starting with 0 up-to and including the maximum bound.

// For example:

// prime(11);
// Should return an array that looks like this:

// [2,3,5,7,11]

function prime(num) {
  var primeNum = [];
  for(var i = 2; i <= num; i++) {
    if(prime2(i)) {
      primeNum.push(i);
    }
  }
  return primeNum;
}

function prime2(num) {
  for(var i = 2; i < num; i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return true;
}