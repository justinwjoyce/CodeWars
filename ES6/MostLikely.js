// 7kyu

// Create a function mostLikely which compares two probabilities, returning true if the first one is most likely otherwise false.

// For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.

// So:

// mostLikely('1:3','1:2') will return false as 1 in 3 is less likely than 1 in 2.

function mostLikely(prob1,prob2){
  let problem1 = prob1.split(':');
  let problem2 = prob2.split(':');
  
  return (+problem1[0] / +problem1[1]) > (+problem2[0] / +problem2[1])
}