// 4kyu
// You need to create a function that will validate if given parameters are valid geographical coordinates.

// Valid coordinates look like the following: "23.32353342, -32.543534534". The return value should be either true or false.

// Latitude (which is first float) can be between 0 and 90, positive or negative. Longitude (which is second float) can be between 0 and 180, positive or negative.

// Coordinates can only contain digits, or one of the following symbols (including space after comma) -, .

// There should be no space between the minus "-" sign and the digit after it.

// Here are some valid coordinates:

// -23, 25
// 24.53525235, 23.45235
// 04, -23.234235
// 43.91343345, 143
// 4, -3
// And some invalid ones:

// 23.234, - 23.4234
// 2342.43536, 34.324236
// N23.43345, E32.6457
// 99.234, 12.324
// 6.325624, 43.34345.345
// 0, 1,2
// 0.342q0832, 1.2324

function isValidCoordinates(coordinates){
  var coords = coordinates.split(', ');

  return validLatitude(coords[0]) && validLongitude(coords[1]);
}


function validLatitude(latitude) {

  if((getIndicesOf('.', latitude)).length > 1 ||
     (latitude.indexOf(',') > -1) ||
     (latitude.indexOf('-') > 0) ||
      latitude.match(/[a-z]/i))
    return false;

  latitude = parseFloat(latitude);

  if(isNaN(latitude))
    return false;

  // check if latitude is in valid bounds
  var absLatitude = Math.abs(latitude);
  if(absLatitude < 0 || absLatitude > 90)
    return false;


  return true;
}

function validLongitude(longitude) {

  if((getIndicesOf('.', longitude)).length > 1 ||
     (longitude.indexOf(',') > -1) ||
     (longitude.indexOf('-') > 0) ||
     longitude.match(/[a-z]/i))
    return false;

  longitude = parseFloat(longitude);

  if(isNaN(longitude))
    return false;

  // check if longitude is in valid bounds
  var absLongitude = Math.abs(longitude);
  if(absLongitude < 0 || absLongitude > 180)
    return false;

  return true;
}

function getIndicesOf(searchStr, str, caseSensitive) {
  var startIndex = 0, searchStrLen = searchStr.length;
  var index, indices = [];
  if (!caseSensitive) {
      str = str.toLowerCase();
      searchStr = searchStr.toLowerCase();
  }
  while ((index = str.indexOf(searchStr, startIndex)) > -1) {
      indices.push(index);
      startIndex = index + searchStrLen;
  }
  return indices;
}