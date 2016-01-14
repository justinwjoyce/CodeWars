//Write a function that takes an array and 
//counts the number of each unique element present.
//count(['james', 'james', 'john'])
//#=> { 'james': 2, 'john': 1}

a = ['a', 'a', 'b', 'b', 'b'];
function count(array){
  result = { };
for(i = 0; i < array.length; ++i) {
    if(!result[array[i]])
        result[array[i]] = 0;
    ++result[array[i]];
  }
  return result
}
count(a);