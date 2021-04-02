//function to test for a tie - pass in the state of the board
var testForTie = (board) => {
  //tie occurs if all spaces are filled and no win has been detected
  //create bool for allSpacesFilled - starts as true
  var allSpacesFilled = true;
  //iterate over the board state
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[0].length; j++) {
      //if a space on the board is a 0
      if (board[i][j] === 0) {
        //change allSpacesFilled to false
        allSpacesFilled = false;
        //return allSpacesFilled
        return allSpacesFilled;
      }
    }
  }
  //if allSpacesFilled var is true and no win detected
  if (allSpacesFilled && !testForWin(board)) {
    //return allSpaces filled
    return true;
  }
}

//function to test for win in game for the current player
  //pass in the board state as an input
  var testForWin = (board, currentPlayer) => {
    //iterate over the state of the board
    for (var i = 0; i < board.length; i++) {
      for (var j = 0; j < board[0].length; j++) {
        //if the current item is a value that matches the currentPlayer in state
        if (board[i][j] === currentPlayer) {
          //test for row win - if current value and next 3 vals all match currentPlayer in state
          if (board[i][j + 1] === currentPlayer && board[i][j + 2] === currentPlayer && board[i][j + 3] === currentPlayer) {
            //return true
            return true;
          }
          //test for column win - if current value and next 3 vals in the same col all match currentPlayer in state
          else if ((i + 3 < board.length)&&(board[i + 1][j] === currentPlayer && board[i + 2][j] === currentPlayer && board[i + 3][j] === currentPlayer)) {
            //return true
            return true;
          }
          //test for major diagonal win - if current value and next 3 vals in diag all match currentPlayer in state
          else if ((i + 3 > 0 && i + 3 < board.length && j + 3 > 0 && j + 3 < board[0].length)&&(board[i + 1][j + 1] === currentPlayer && board[i + 2][j + 2] === currentPlayer && board[i + 3][j + 3] === currentPlayer)) {
            //return true
            return true;
          }
          //test for minor diag win - if current value and next 3 vals in diag all match currentPlayer in state
          else if ((i - 3 > 0 && i - 3 < board.length && j + 3 > 0 && j + 3 < board[0].length)&&(board[i - 1][j + 1] === currentPlayer && board[i - 2][j + 2] === currentPlayer && board[i - 3][j + 3] === currentPlayer)) {
            //return true
            return true;
          }
        }
      }
    }
    //catch all = return false
    return false;
  }


  module.exports = {
    testForTie,
    testForWin
  }