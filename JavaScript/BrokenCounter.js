// 8kyu
// Our counter prototype is broken. Can you spot, what's wrong here?

function Counter() {
  this.value = 0;
}

// corrected the declaration of methods on the Counter constructor function
Counter.prototype.increase = function() {
  this.value++;
};

Counter.prototype.getValue = function() {
  return this.value;
};

Counter.prototype.reset = function() {
  this.value = 0;
};