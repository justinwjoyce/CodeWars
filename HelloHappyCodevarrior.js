// 8kyu

// VVhat ?!?

// None of zese codevarriors seemz to remember hiz ovvn name !

// Kould you help ?

// var albert = new Warrior("Al")
// var boris  = new Warrior("Boris")

// albert.toString() --> "Hi! my name's Boris" <-- ohoh..

function Warrior(n){
  this._name = n;  
  this.name = function(n){
    if( n ) this._name=n;
    return this._name;
  }
}
  
Warrior.prototype.toString = function(){
    return "Hi! my name's "+this.name();
}
 // best practice solution
 function Warrior(n){
  var name = n;
  this.name = function(n){
    if( n ) name=n;
    return name;
  }  
}
  
Warrior.prototype.toString = function(){
    return "Hi! my name's "+this.name();
}