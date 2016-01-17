// 8kyu
// Create a function called shortcut to remove all the lowercase vowels in a given string.

// Examples

// shortcut("codewars") // --> cdwrs
// shortcut("goodbye")  // --> gdby
// Don't worry about uppercase vowels.

function shortcut(str) { 
    var output = "";
    for (var i = 0; i < str.length; i++) {
        if ("aeiou".indexOf(str[i]) === -1) {
            output += str[i];
        } 
    }
    return output;
}