// 4kyu
// Finish the namespace function so that it sets or gets the value at the path specified. The first argument should be the root object that the path belongs to. The 2nd argument is the path itself and the 3rd optional argument is the value to set at the path.

// If a value is provided then the path will be set to that value. Any objects not present within the path will be created automatically in order for the path to be successfully set.


// stuff = {}
// namespace(stuff, 'moreStuff.name', 'the stuff')
// # results in {moreStuff: {name: 'the stuff'}}
// If no value is provided the the function will return the value at the path given. If the path is not valid/present then undefined will be returned.

// namespace(stuff, 'moreStuff.name') # returns 'the stuff'
// namesace(stuff, 'otherStuff.id') # returns undefined

function namespace(root, path, value) {
  var object = root;
  var pieces = path.split('.');
  var length = pieces.length;
  var returnValue;
  
  pieces.forEach((j, i) => {
    var hasValue = object[j];
    object[j] = object[j] || {};
    
    if (length - 1 === i) {
      if (typeof value !== 'undefined') {
        object[j] = value;
      }
      else {
        returnValue = hasValue ? object[j] : undefined;
      }
    }
    
    object = object[j];
  });
  
  return typeof value === 'undefined' ? returnValue : root;
}