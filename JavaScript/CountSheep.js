// 8kyu

// Consider an array of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

function countSheeps(arrayOfSheep) {
  var count = 0;
  for(var i = 0; i < arrayOfSheep.length; i++){
    if(arrayOfSheep[i] === true){
       count += 1;   
    }  
  }
  return count;
}