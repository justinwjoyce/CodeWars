// 8kyu

// You are creating a text-based terminal version of your favorite board game. In the board game, each turn has six steps that must happen in this order: roll the dice, move, combat, get coins, buy more health, and print status.

// You are using a library that already has the functions below. Create a function named doTurn/do_turn that calls the functions in the proper order as described in the paragraph above.

// - combat
// - buyHealth
// - getCoins
// - printStatus
// - rollDice
// - move

function doTurn () {
  rollDice()
  move()
  combat()
  getCoins()
  buyHealth()
  printStatus()
}

// es6

const doTurn = () => {
  rollDice()
  move()
  combat()
  getCoins()
  buyHealth()
  printStatus()
}