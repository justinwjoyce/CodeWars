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