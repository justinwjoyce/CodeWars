// 4kyu
// In this kata, we want to convert a URL query string into a nested object. The query string will contain parameters that may or may not have embedded dots ('.'), and these dots will be used to break up the properties into the nested object.

// You will receive a string input that looks something like this:

// user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue
// Your method should return an object hash-map that looks like this:

// {
//   'user': {
//     'name': {
//       'firstname': 'Bob',
//       'lastname': 'Smith'
//     },
//     'favoritecolor': 'Light Blue'
//   }
// }
// You can expect valid input. You won't see input like:
//   // This will NOT happen
//   foo=1&foo.bar=2
// All properties and values will be strings — and the values should be left as strings to pass the tests.
// Make sure you decode the URI components correctly
// A method has been provided for testing Objects to compare objects recursively without depending on property order:
//   assertSimilarObjects(myValue, expectedValue);
// Use it just like Test.assertSimilar, it will call the testing framework for you.

function convertQueryToMap(query) {
  if (!query) return { };
  var queryString = getQueryString(query.split('&'));
  return Object.keys(queryString).reduce((x, y) => {
    var o = x;
    var chunks = y.split('.');
    chunks.forEach((p, i) => {
      if (chunks.length - 1 === i) {
        o[p] = queryString[y];
      }
      else {
        o[p] = o[p] || { };
      }
      o = o[p];
    });

    return x;
  }, {});
}

function getQueryString(query) {
  var queryValues = { };
  for (var i = 0; i < query.length; ++i) {
      var param = query[i].split('=', 2);
      if (!queryValues[param[0]]) {
        if (param.length == 1) {
            queryValues[param[0]] = "";
        }
        else {
            queryValues[param[0]] = decodeURIComponent(param[1].replace(/\+/g, " "));
        }
      }
  }
  
  return queryValues;
}