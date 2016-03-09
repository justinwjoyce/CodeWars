// 5kyu
// Complete the function/method so that it takes CamelCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If method gets number, it should return string.

// Examples:

// //  returns test_controller
// toUnderscore('TestController');

// // returns movies_and_books
// toUnderscore('MoviesAndBooks');

// // returns app7_test
// toUnderscore('App7Test');

// // returns "1"
// toUnderscore(1);

function toUnderscore(str) {
  str += '';
  return str.substring(0, 1).toLowerCase() +
    str.substring(1).replace(/[A-Z]/g, (x) => {
      return "_" + x.toLowerCase();
    });
}