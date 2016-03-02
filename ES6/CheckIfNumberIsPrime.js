// beta
// Creates a function that checks if a number is prime (divisible only by 1 and itself, except 1). Remember: one is not a prime number.
const checkPrime = n => isPrime(n);

const isPrime = n => {
  if (n <= 1) return false;
  
  for (let i = 2, max = Math.sqrt(n); i <= max; ++i) {
    if (!(n % i)) return false;
  }
  
  return true;
};