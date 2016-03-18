// 4kyu
// Write a function called validBraces that takes a string of braces, and determines if the order of the braces is valid. validBraces should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces four new characters. Open and closed brackets, and open and closed curly braces. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of open parentheses '(' , closed parentheses ')', open brackets '[', closed brackets ']', open curly braces '{' and closed curly braces '}'.

// What is considered Valid? A string of braces is considered valid if all braces are matched with the correct brace. 
// For example:
// '(){}[]' and '([{}])' would be considered valid, while '(}', '[(])', and '[({})](]' would be considered invalid.

// Examples: 
// validBraces( "(){}[]" ) => returns true 
// validBraces( "(}" ) => returns false 
// validBraces( "[(])" ) => returns false 
// validBraces( "([{}])" ) => returns true 

function validBraces(braces){
  var closing = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  
  var counters = {
    '(': 0, ')': 0,
    '[': 0, ']': 0,
    '{': 0, '}': 0,
  };
  
  var chunks = braces.split('');
  var lastOpen = [];
  for (var i = 0; i < chunks.length; ++i) {
    var isClosing = /\)|\]|\}/.test(chunks[i]);
    
    if (isClosing && lastOpen.length
      && closing[lastOpen.pop()] !== chunks[i]) {
      return false;
    }
    
    counters[chunks[i]]++;
    
    if (/\{|\[|\(/.test(chunks[i])) {
      lastOpen.push(chunks[i]);
    }
  }
    
  return counters['('] - counters[')'] === 0
    && counters['['] - counters[']'] === 0
    && counters['{'] - counters['}'] === 0;
}