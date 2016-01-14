// 8kyu
// Given an input n, write a function always that returns a function which returns n.
var three = always(3);
three(); // returns 3

function always(n) {
	return function() {
		return n;
	};
}