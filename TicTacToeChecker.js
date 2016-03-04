// 5kyu
// If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an X, or 2 if it is an O, like so:

// [[0,0,1],
//  [0,1,2],
//  [2,1,0]]
// We want our function to return -1 if the board is not solved yet, 1 if X won, 2 if O won, or 0 if it's a cat's game (i.e. a draw).

// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

function isSolved(board) {
  if (check(board, 1))
    return 1;
    
  if (check(board, 2))
    return 2;

  return -~~(board.reduce((a, b) => {
    return a.concat(b);
  }).join('').indexOf('0') !== -1);
}

function check(board, x) {
  return (board[0][0] === x
    && board[0][1] === x
    && board[0][2] === x)
    ||
    (board[0][0] === x
    && board[1][1] === x
    && board[2][2] === x)
    ||
    (board[0][2] === x
    && board[1][1] === x
    && board[2][0] === x)
    ||
    (board[0][1] === x
    && board[1][1] === x
    && board[2][1] === x)
    ||
    (board[1][0] === x
    && board[1][1] === x
    && board[1][2] === x)
    ||
    (board[0][0] === x
    && board[1][0] === x
    && board[2][0] === x)
    ||
    (board[2][0] === x
    && board[2][1] === x
    && board[2][2] === x);
}