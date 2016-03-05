// 8kyu
// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples:

// peopleWithAgeDrink(13) === "drink toddy"
// peopleWithAgeDrink(17) === "drink coke"
// peopleWithAgeDrink(18) === "drink beer"
// peopleWithAgeDrink(20) === "drink beer"
// peopleWithAgeDrink(30) === "drink whisky"

var peopleWithAgeDrink = function(old) {
  var message = 'drink ';
  
  if (old >= 21) {
    message += 'whisky'
  }
  else if (old >= 18) {
    message += 'beer'
  }
  else if (old >= 14) {
    message += 'coke'
  }
  else {
    message += 'toddy'
  }

  return message;
}