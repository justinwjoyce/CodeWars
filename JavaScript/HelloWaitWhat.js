// 4kyu
// In order to stop too much communication from happening, your overlords declare that you are no longer allowed to use certain functionality in your code!

// Disallowed functionality:

// Strings
// Numbers
// Regular Expressions
// Functions named "Hello", "World", "HelloWorld" or anything similar.
// Object keys named "Hello", "World", "HelloWorld" or anything similar.
// Without using the above, output the string "Hello World!" to prove that there is always a way.

function a () {};

function helloWorld2 () {
  // Hello World!
}

var sliceIndex = [a,a,a,a,a, a,a,a,a,a, a,a,a,a,a, a,a,a,a,a, a,a].length;
var helloWorldLength = [a,a,a,a,a, a,a,a,a,a, a,a].length;

var helloWorld = function test() {
  return helloWorld2.toString().slice(sliceIndex, sliceIndex + helloWorldLength);
};