// 7kyu
// Create a function that takes a string and returns that string with the first half lowercased and the last half uppercased.

// eg: foobar == fooBAR

// If it is an odd number then 'round' it up to find which letters to uppercase. See example below.

// sillycase("brian")  
// //         --^-- midpoint  
// //         bri    first half (lower-cased)  
// //            AN second half (upper-cased)  

function sillycase(silly) {
  silly = silly.split("");
  for (var i = 0; i < silly.length; i++) {
    if (i < silly.length / 2) {
      silly[i] = silly[i].toLowerCase();
    } else {
      silly[i] = silly[i].toUpperCase();
    }
  }
  return silly.join("");
}