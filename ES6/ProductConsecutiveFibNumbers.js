// 5kyu

// The Fibonacci numbers are the numbers in the following integer sequence (Fn):

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...
// such as

// F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.
// Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

// F(n) * F(n+1) = prod.
// Your function productFib takes an integer (prod) and returns an array:

// [F(n), F(n+1), true]
// if F(n) * F(n+1) = prod or returns

// [F(m), F(m+1), false]
// if you don't find two consecutive F(m) verifying F(m) * F(m+1) = prod. F(m) will be the smallest one such as F(m) * F(m+1) > prod.

// Examples

// productFib(714) # should return [21, 34, true], 
//                 # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

// productFib(800) # should return [34, 55, false], 
//                 # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
// Note: Not useful here but we can tell how to choose the number n up to which to go: we can use the "golden ratio" phi which is (1 + sqrt(5))/2 knowing that F(n) is asymptotic to: phi^n / sqrt(5). That gives a possible upper bound to n.

function productFib(prod) {
  let previous = 0;
  let current = 1;
  let final;

  for (let i = 1; (previous * current) <= prod; ++i) {
    if ((previous * current) === prod) {
      return [previous, current, true];
    }
    final = previous + current;
    previous = current;
    current = final;
  }
  return [previous, current, false];
}

let looping = function(n) {
    var a = 0, b = 1, final = 1;
    for(var i = 2; i <= n; i++) {
        final = a + b;
        a = b;
        b = final;
    }
    return final;
};

// better solution

function productFib(prod){
  var n = 0;
  var nPlus = 1;  
  while(n*nPlus < prod) {
    nPlus = n + nPlus;
    n = nPlus - n;
  }
  return [n, nPlus, n*nPlus===prod];
}