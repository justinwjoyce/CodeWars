// 5kyu
// The marketing team are spending way too much time typing in hashtags.
// Let's help them with out own Hashtag Generator!

// Here's the deal:

// If the final result is longer than 140 chars it must return false.
// If the input is a empty string it must return false.
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// Example Input to Output:

// " Hello there thanks for trying my Kata" => "#HelloThereThanksForTryingMyKata"

// " Hello World " => "#HelloWorld"

function generateHashtag (str) {
    if (str==='') return false;
    var array = str.split(' ');
    var capitalString = '';
    array.forEach(function(word){
        capitalString += word.slice(0, 1).toUpperCase() + word.slice(1); //capitalize and add word
    });
    if (capitalString.length > 139) return false;
    else return capitalString = '#' + capitalString;
}