// 5kyu
// Write function scramble(str1,str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// For example:
// str1 is 'rkqodlw' and str2 is 'world' the output should return true.
// str1 is 'cedewaraaossoqqyt' and str2 is 'codewars' should return true.
// str1 is 'katas' and str2 is 'steak' should return false.

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered

function scramble(str1, str2) {
  if (str2.length > str1.length) return false;
  var string = {};
  
  for (var i = 0, j, len = str2.length; i < len; i++) {
    if ((j = str1.indexOf(str2[i], string[str2[i]]||0)) != -1) {
      string[str2[i]]=j+1;
    }
    else {
      return false;
    }
  }
  
  return true;
}
