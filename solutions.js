//Make a program that takes input and returns "Fizz" if it is a multiple of 7, 
//"Fang" if it is a mulitple of 49 AND 3, 
//"Foo" if it is a multiple of 15, and 
//"Far" if it is not divisible by any of those.

function multiples(x){
    if (x % 49 === 0 && x % 3 === 0){return "Fang";} 
    if (x % 7 === 0){return "Fizz";}       
    if (x % 15 === 0){return "Foo";} 
    return "Far"; 
}
multiples(37);

//******************************//

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