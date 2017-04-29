// // 8kyu

// Find the last element of a list.

// Example:

// last( [1,2,3,4] ) // => 4
// last( "xyz" )     // => z
// last( 1,2,3,4 )   // => 4


function last(list){
  var last = arguments[arguments.length - 1];
  return last[last.length - 1] || last;
}


// es6
const last = (...list) => {
  let l = list[list.length - 1];
  
  if (l.slice) {
    return l.slice(-1)[0];
  }
  return l;
};
