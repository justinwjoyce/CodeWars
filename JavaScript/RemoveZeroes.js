// 4kyu
// Write a function that takes an array of values and moves all elements that are zero to the end of the array, otherwise preserving the order of the array. The zero elements must also maintain the order in which they occurred.

// For example, the following array

// [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]

// is transformed into

// [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]

// Zero elements are defined by either 0 or "0". Some tests may include elements that are not number literals.

// You are NOT allowed to use any temporary arrays or objects. You are also not allowed to use any Array.prototype or Object.prototype methods.

function removeZeros(array) {
    if (array.length === 0) return array;
    var zeroes = 0; //keeps track of zeros so we know when to exit for loop
    for (var i = 0, len = array.length; i < len; i++) {
        if (array[i] === 0 || array[i] === '0') { //shuffle numbers back one space and put zero at end
            zeroes += 1;

            for (var j = i + 1; j < len; j++) {//this looks for non-zero after i of array
                var numbers = array[j]; //non-zero number at end to swap places with zero num
                array[j] = array[j-1]; //set index of num we will move up to zero
                array[j-1] = numbers; //now the zero has been swapped for a non-zero
            }

            i -= 1; //move index back one because next item is now one index lower
        }
        if (i + 1 + zeroes >= len){ //if only zeros that were moved are left -> end
            return array;
        }
    }
}