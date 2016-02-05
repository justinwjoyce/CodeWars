// 5kyu
// Every Turkish citizen has an identity number whose validity can be checked by these set of rules:

// It is an 11 digit number
// First digit can't be zero
// Take the sum of 1st, 3rd, 5th, 7th and 9th digit and multiply it by 7. Then subtract the sum of 2nd, 4th, 6th and 8th digits from this value. Modulus 10 of the result should be equal to 10th digit.
// Sum of first ten digits' modulus 10 should be equal to eleventh digit.
// Example:

// 10167994524
// //  1+1+7+9+5= 23   // "Take the sum of 1st, 3rd, 5th, 7th and 9th digit..."
// //    23 * 7= 161   //  "...and multiply it by 7"
// //   0+6+9+4 = 19   // "Take the sum of 2nd, 4th, 6th and 8th digits..."
// // 161 - 19 = 142   // "...and subtract from first value"
// // "Modulus 10 of the result should be equal to 10th digit"
// 10167994524
//          ^ = 2 = 142 % 10
// // 1+0+1+6+7+9+9+4+5+2 = 44
// // "Sum of first ten digits' modulus 10 should be equal to eleventh digit"
// 10167994524
//           ^ = 4 = 44 % 10
// Your task is to write a function to check the validity of a given number. Return true or false accordingly.

function checkValidTrNumber(n) {

  var arr = n.toString().split("").map(Number);
  if(!isNaN(arr)) return false;
  else if(arr.length !== 11) return false;
  else if(arr[0] === 0) return false;

  var group1 = arr[0] + arr[2] + arr[4] + arr[6] + arr[8];
  var group2 = arr[1] + arr[3] + arr[5] + arr[7];
  if((group1 * 7 - group2) % 10 !== arr[9]) return false;

  var numbers = arr[0] + arr[1] + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] + arr[7] + arr[8] + arr[9];
  if(numbers % 10 !== arr[10]) return false;
  return true;
}
