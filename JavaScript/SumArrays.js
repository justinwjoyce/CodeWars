// 8kyu
// Write a method sum that takes an array of numbers and returns the sum of the numbers. The numbers can also be negative. If the array does not contain any numbers then you should return 0.
// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.

function sum(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}