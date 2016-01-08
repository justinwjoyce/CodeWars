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

//******************************//

// Write a program to find count of the most frequent item of an array.

// Assume that input is array of integers.

var numbers = [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3];

function mostFrequentItemCount(collection) {
  if(collection.length == 0)
    	return 0;
    var modeMap = {};
    var maxEl = collection[0], maxCount = 1;
    for(var i = 0; i < collection.length; i++)
    {
    	var el = collection[i];
    	if(modeMap[el] == null)
    		modeMap[el] = 1;
    	else
    		modeMap[el]++;	
    	if(modeMap[el] > maxCount)
    	{
    		maxEl = el;
    		maxCount = modeMap[el];
    	}
    }
    return modeMap[maxEl];
}
mostFrequentItemCount(numbers);

//better solution
function mostFrequentItemCount(collection) {
  if (collection.length === 0) return 0;
  
  var count = Object.create(null);
  
  collection.forEach( item => {
    count[item] = (count[item] || 0) + 1;
  });
  
  return Math.max(...Object.values(count));
}

//******************************//

// Method 1

// The first method takes in a valid int (positive or negative) and returns the following:

// for any multiple of 3 the string "THREE",
// for any multiple of 5 the string "FIVE",
// for any multiple of both the string "BOTH",
// for all other numbers the original int.
// Method 2

// The second method takes valid ints (positive or negative) and returns a list of the values that follow the above rules.

// The first value may be greater than or less than the second and the list should increment/decrement appropriately

// For example an input of 10,13 should generate a response of ['FIVE', 11, 'THREE', 13].

function getNumber(number){
    if (number % 3 === 0 && number % 5 === 0){return "BOTH";}
    if (number % 3 === 0){return "THREE";} 
    if (number % 5 === 0){return "FIVE";}        
    return number;
};

function getNumberRange(first, last){
    var list = [];
    if (last > first){
    for(var i = first; i <= last; i++){
    list.push(getNumber(i));
      }
      return list;
    }else{
    for(var i = first; i >= last; i--){
    list.push(getNumber(i));
    }
    return list;
    }
};

//better solution
function getNumber(number){
  if (number % 15 == 0)
    return 'BOTH';
  else if (number % 3 == 0)
    return 'THREE';
  else if (number % 5 == 0)
    return 'FIVE';
  else
    return number;
};

function getNumberRange(first, last){
  var result = [], incr = last < first ? -1 : 1
  for (var n = first; n != last + incr; n += incr) result.push(getNumber(n));
  return result
};

//******************************//

// Calculate the sum of all the arguments passed to a function.
// Note: If any of the arguments is not a finite number the function should return false/False instead of the sum of the arguments.
 function sum() {
   var total = 0;
   for (var i = 0; i < arguments.length; i++){
     if ( isNaN( parseFloat(arguments[i]) ) ) {
       return false;
     } else {
       total += parseFloat( arguments[i] );
     }
   }
   return total;
 }

//******************************//

//Implement a function that successfully adds two numbers together and returns their solution in binary. The //conversion can be done before, or after the addition of the two.

//The binary number returned should be a string!
function addBinary(a,b) {
    var sum = a + b
    var binary = (sum >>> 0)
    return binary.toString(2)
}

//******************************//

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""

// "What was the name of your first pet?"
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "####################################man!"




