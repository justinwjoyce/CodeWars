// 7kyu
// Write a program to determine if a string contains all unique characters. Return True/true if it does and False/false otherwise.

// The string may contain any of the 128 ASCII characters.

function hasUniqueChars(str){
 var unique = {};
  for (var i in str) {
    unique[str[i]] = (unique[str[i]] || 0) + 1;

    if (unique[str[i]] > 1) {
      return false;
    }
  }
  return true;
}