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

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

//******************************//

// Series: bit “Wise”

// Javascript’s bitwise operators are probably the least used and least widely understood part of the language: In the domain of the web, where Javascript enjoys unrivaled supremacy, operating on the bits-and-bytes level is often abstracted away (perhaps thankfully). Despite this, there remain practical uses for the language’s bitwise operators both on the web (for performance reasons) and especially in the burgeoning field of physical computing (Arduino, RaspberryPi, etc.), where Javascript is being embedded in and interacting with things like sensor packages, shift registers and other electronic components that “speak binary”. In this series of Kata, we’ll familiarize ourselves with some of the “basic moves” of the JS bitwise operators.
// Exercise 2: SHIFT-iness

// One of the tricky things about (x).toString(2) (where x is an integer, which reports the number back in binary) is that it doesn't really tell us the "whole story" about how JS is handling the bits for any given number. You learn this very quickly when you apply the "~" bitwise operator to an integer.
// For Example:

// console.log((5).toString(2));
// logs "101" to the console...which is what you expect, right?

// So "flipping" the bits on the number with the "~" operator should yield 010 - or 2, right? Let's see:

// console.log(~5);
// -6!? -6?! WTF?

// Well, there's a reason for that. The binary representation of numbers in JS is handled in the "Two's Complement" system...which is just a fancy way of saying that for any given set of bits, the first bit represents the sign (0 for positive, 1 for negative) of the number and the rest of the bits represent the "absolute value" of the number according to the following simple formula: A) For positive numbers and 0, the value tells how "far" from 0 the number is... i.e. 10 in binary (2 in decimal) means "2 above 0"...so for a 3-bit number in Two's Complement, the number 2 (decimal) would be represented as: "010". B) For negative numbers, how far above the smallest possible value that can be represented with the number of bits available...e.g. with three bits, the smallest possible number we can represent is -4...so "101" (binary) is like saying "01 more than -4"...or -3.

// So in the example above, when we "flipped" the bits of the number 5, there was the extra "sign bit" on the front that got flipped as well.. so what we thought was "101" was actually "0101" and when we flipped the bits, we got "1010" - i.e. "Two more than the smallest number possible in this many bits" == "Two more than -8" == "-6".

// Here are all the possible 2's complement numbers in a 3-bit system: (binary == decimal)
// 011 == 3
// 010 == 2
// 001 == 1
// 000 == 0
// 111 == -1
// 110 == -2
// 101 == -3
// 100 == -4

// Now the problem; Extend the Number prototype with a function called "twos" that accepts one parameter (n), and when called, returns the two's-complement representation of the number in "n" bits in a string.

// e.g.

// (-2).twos(3) == "110";
// (8).twos(5) == "01000";
// (-8).twos(5) == "11000";
// (-16).twos(5) == "10000";

Number.prototype.twos = function(n) {
  var bit = this >= 0 ? 0 : 1;
  var number = Math.abs(this).toString(2);
  return Array(n - number.length + 1).join(bit) + number;
};

//******************************//


// Write a function that accepts a starting and ending IPv4 address, and returns the number of IP addresses from start to end, excluding the end IP address. 
// All input to the ipsBetween function will be valid IPv4 addresses in the form of strings. The ending address will be at least one address higher than the starting address. 

// Examples: 
// ipsBetween("10.0.0.0", "10.0.0.50") => returns 50 
// ipsBetween("10.0.0.0", "10.0.1.0") => returns 256 
// ipsBetween("20.0.0.10", "20.0.1.0") => returns 246

function ipsBetween(start, end){
  var converted = [end, start].map(function(address) {
    return address.split('.').reduceRight(function(memo, item, index) {
      var multiplier = Math.pow(256, 3 - index);
      return parseInt(memo) + (parseInt(item) * multiplier);
    });
  });
  return converted[0] - converted[1];
}


