// 6kyu
// Santa's elves are boxing presents, and they need your help! Write a function that takes two arrays of dimensions of the present and the box, respectively, and returns a Boolean based on whether or not the present will fit in the box provided. The box's walls are one unit thick, so be sure to take that in to account.

// Example:

// willFit([10,7,16], [13, 32,10]);  //Returns true, box is bigger than present
// willFit([5, 7, 9], [9, 5, 7]);    //Returns false, present and box are same size
// willFit([17, 22, 10],[5, 5, 10]); //Returns false, box is too small

function willFit(present, box) {
    var comparator = function (a, b) {
        return b - a;
    };
    var ordered = box.slice().sort(comparator);
    return present.slice().sort(comparator).every(function (size, which) {
        return size + 2 <= ordered[which];
    });
}