// 7ky
//Implement a function that successfully adds two numbers together and returns their solution in binary. The //conversion can be done before, or after the addition of the two.

//The binary number returned should be a string!
function addBinary(a,b) {
    var sum = a + b
    var binary = (sum >>> 0)
    return binary.toString(2)
}