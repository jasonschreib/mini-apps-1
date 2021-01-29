//Model - program state - the truth of my program
//create gameBoard variable
var gameBoard;
//create player variable to keep track of which player is playing - starts at true, which is X
var player = true;
//create win variable
var won = false;
//create tie variable
var tie = false;

//create reset function - resets the gameBoard
var reset = function() {
  gameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  //iterate over the gameBoard and reset the innerHTML of each element
  var gameSquares = document.getElementsByTagName('td');
  //iteration over the gameSquares array
  for (var i = 0; i < gameSquares.length; i++) {
    //set the innerHTML to an empty string for each index
    gameSquares[i].innerHTML = "";
  }
  //set the current player to be X again - which is stored as a boolean true
  player = true;

  console.log('NEW GAME');
  console.log('WHICH PLAYER', player);
};

//create add piece function - access the correct box in the tictactoe table and place a piece according to who is the current user
var addPiece = function() {
  //once user clicks on a box in the table, this function is invoked
  //get the row of the clicked table
  var row = this.parentNode.rowIndex;
  //get the column of the clicked table
  var column = this.cellIndex;
  console.log('clicked at ROW', row, 'COL', column);
  //if the row and column already are true or false
  if (gameBoard[row][column] !== null) {
    //exit this function
    return;
  }

  //if current user is X
  if (player === true) {
    //then add a true to the row column clicked
    gameBoard[row][column] = true;
    //if current user is an O
  } else if (player === false) {
    //then add a false to the row column clicked
    gameBoard[row][column] = false;
  }

  // //invoke the display function to render the gameBoard with added current pleice
  display(row, column);
  // //invoke didWin function
  didWin();
  // //if win true, then invoke message function for win with current player
  if (won) {
    //invoke win message function
    wonMessage();
    return;
  }
  //otherwise invoke the didTie function
  didTie();
  //and if tie is true, then invoke message function for tie
  if (tie) {
    //invoke tie message function
    tieMessage();
    return;
  }

  //switch the player if reach this far
    player = !player;
  //then invoke function to display message with new player's turn
    displayTurn();

};

//create didWin function that returns a boolean, ends the game, and calls display message in the view
var didWin = function() {
//check if there are any 3 in a rows for the current player
//check all rows
for (var i = 0; i < gameBoard.length; i++) {
    if (gameBoard[i][0] === player && gameBoard[i][1] === player && gameBoard[i][2] === player) {
      return won = true;
    }
}
//check all columns
for (var j = 0; j < gameBoard.length; j++) {
  if (gameBoard[0][j] === player && gameBoard[1][j] === player && gameBoard[2][j] === player) {
    return won = true;
  }
}
//check both diagonals
//first check top left to bottom right
if (gameBoard[0][0] === player && gameBoard[1][1] === player && gameBoard[2][2] === player) {
  return won = true;
}
//then check
if (gameBoard[2][0] === player && gameBoard[1][1] === player && gameBoard[0][2] === player) {
  return won = true;
}
};

//create didTie function that returns a boolean, ends the game, and calls display message in the view
var didTie = function() {
  //if didWin is false and no indices in the gameBoard are null
  //first check if no indices on gameBoard are null
  var none = true;
  for (var i = 0; i < gameBoard.length; i++) {
    for (var j = 0; j < gameBoard[i].length; j++) {
      if (gameBoard[i][j] === null) {
        none = false;
        return;
      }
    }
  }
  if (!won && none) {
    //then set tie to true
    tie = true;
  }
}




//View - presentation

//function for displaying the gamepiece on gameboard based on the model
var display = function(row, col) {
  var index;
  //get the correct table index
  if (row === 0 && col === 0) {
    index = 0;
  } else if (row === 0 && col === 1) {
    index = 1;
  } else if (row === 0 && col === 2) {
    index = 2;
  } else if (row === 1 && col === 0) {
    index = 3;
  } else if (row === 1 && col === 1) {
      index = 4;
  } else if (row === 1 && col === 2) {
      index = 5;
  } else if (row === 2 && col === 0) {
      index = 6;
  } else if (row === 2 && col === 1) {
      index = 7;
  } else if (row === 2 && col === 2) {
    index = 8;
  }
  //if the value of the index is true, then add an X to the html gameboard at that cell
  if (gameBoard[row][col]) {
    //add an X to the innerhTML of the table cell
    document.getElementsByTagName('td')[index].innerHTML = 'X';
    //otherwise, if the value of the index is false, then add an O to the html gameboard at that cell
  } else if (!gameBoard[row][col]) {
    document.getElementsByTagName('td')[index].innerHTML = 'O';
  }
};

//function for displaying which user's (X or O) turn it is
var displayTurn = function() {
  if (player) {
    document.getElementById("turn").innerHTML = "It is now Player X's turn.";
  }
  else {
    document.getElementById("turn").innerHTML = "It is now Player O's turn.";
  }
};

//function for displaying message if a user has won
var wonMessage = function() {
  var piece;
  if (player) {
    piece = "X";
  } else {
    piece = "O";
  }
  alert("Game is over! Player " + piece + " has won the game! Click Ok and reset game to play again.");
};

//function for displaying message if there is a tie - called from model
var tieMessage = function() {
  var piece;
  var piece2;
  if (player) {
    piece = "X";
    piece2 = "O";
  } else {
    piece = "O";
    piece2 = "X"
  }
  alert("Game is over! Player " + piece + " and Player " + piece2 + " have tied! Click Ok and reset game to play again. ");
};




//Controller - user input

//run window.onload so that evenListeners execute when DOM fully loads
window.onload = function () {
  //create clickHandler for clicking reset button
  //resets the gameBoard in model to gameBoard initial
  //create variable to refer to reset button
  var resetButton = document.querySelector(".resetButton");
  //create the event listener
    resetButton.addEventListener("click", reset);

  //create clickHandler for click on placing piece
  var clickPieces = document.getElementsByTagName("td");
  //iterate over the clickPieces array and add eventListeners to each square
  for (var i = 0; i < clickPieces.length; i++) {
    clickPieces[i].addEventListener("click", addPiece);
    console.log(clickPieces[i]);
  }
};




//call the reset function to start the game
reset();
