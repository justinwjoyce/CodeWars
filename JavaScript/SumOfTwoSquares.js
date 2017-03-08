// 5kyu

// We are asking for a function to take a positive integer value, and return a list of all positive integer pairs whose values - when squared- sum to the given integer.

// For example, given the parameter 25, the function could return two pairs of 5,0 and 3,4 because 5^2 + 0^2 = 25 and 3^2 + 4^2 = 25.

// We might express that in pseudo-code like this:

//     allSquaredPairs(25) == [[5,0],[3,4]];
// Here are the requirements:

// The return value should be a two dimensional array of positive integer pairs in any order.
// A parameter value that is not the sum of any two squares should simply return an empty array
// We will consider 5,0 and 0,5 to be equal pairs, disregarding the order. Do not list the same pair twice.
// The upper bound of the parameter value will be 2,147,483,647

function allSquaredPairs(num) {
  var max = ~~Math.sqrt(num);
  var max2 = Math.min(max / 2 + 3120, max);
  var x = [];
  for (var i = 0; i <= max2; ++i) {
    for (var j = max - i; j <= max; ++j) {
      if ((i*i + j*j) == num) {
      if (j < i) return x;
        x.push([i, j]);
      }
    }
  }
  return x;
}