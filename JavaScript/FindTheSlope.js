// // 8kyu 
// Given an array of 4 integers
// [a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.

// For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.

// Assume that [a,b,c,d] and the answer are all integers (no floating numbers!). Slope: https://en.wikipedia.org/wiki/Slope

function slope(points)
{
  var line = (points[3] - points[1]) / (points[2] - points[0]);
  return isFinite(line) ? ''+line : 'undefined';
}