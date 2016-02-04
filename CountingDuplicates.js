// 6kyu
// Write a function that will return the count of distinct case-insensitive alphabetic characters that occur more than once in the given string. The given string can be assumed to contain only uppercase and lowercase alphabets.

// Example

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabbcdeB" -> 2 # 'a' and 'b'
// "indivisibility" -> 1 # 'i'
// "Indivisibilities" -> 2 # 'i' and 's'

function duplicateCount(text) {
  text = text.toLowerCase();
  var characters = {};
  var maxNum = 0;
  for (var i = 0; i < text.length; i++) {
    if (!characters[text[i]]) {
      characters[text[i]] = 1;
    }
    else if(characters[text[i]] === 1) {
      characters[text[i]]++;
      maxNum++;
    }
  }
  return maxNum;
}
