// 7kyu

// This is a follow up from my kata Insert Dashes. 
// Write a function insertDashII(num) that will insert dashes ('-') between each two odd numbers and asterisk ('*') between each even numbers in num
// For example: 
// insertDashII(454793) --> 4547-9-3 
// insertDashII(1012356895) --> 10123-56*89-5 

// Zero shouldn't be considered even or odd.

const insertDashII = num => `${num}`.replace(/([13579])(?=[13579])/g, "$1-").replace(/([2468])(?=[2468])/g, "$1*");

// alternate solution

function insertDashII(num) {
  return String(num)
    .replace(/([13579])(?=[13579])/g, "$1-")
    .replace(/([2468])(?=[2468])/g, "$1*")
}