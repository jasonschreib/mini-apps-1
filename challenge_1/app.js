//Model - program state - the truth of my program
//create gameBoard variable
var gameBoard;
//create player variable to keep track of which player is playing - starts at true, which is X
var player = true;
//create win variable
var won = false;

//create reset function - resets the gameBoard
var reset = function() {
  gameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  //set the current player to be X again - which is stored as a boolean true
  player = true;
  //create a message that appears saying it's a new game
  //TODO

  console.log('NEW GAME');
  console.log('WHICH PLAYER', player);
};

//create function to switch the current player
var switchPlayer = function() {
  //switch the current player to the opposite
  player = !player;
};

//create add piece function - access the correct box in the tictactoe table and place a piece according to who is the current user
var addPiece = function() {
  console.log('CLICKED');
  console.log('EVENT', event);
  //once user clicks on a box in the table, this function is invoked
  //get the row of the clicked table
  var row = this.parentNode.rowIndex;
  //get the column of the clicked table
  var column = this.cellIndex;
  console.log('clicked at ROW', row, 'COL', column);
  //if current user is X
    //then add a true to the row column clicked

  //if current user is O
    //then add a false to the row column clicked

  //invoke the didWin function and if true, then invoke message function for win with current player

  //otherwise invoke the didTie function and if true, then invoke message function for tie

};

//create didWin function that returns a boolean, ends the game, and calls display message in the view
var didWin = function() {

};

//create didTie function that returns a boolean, ends the game, and calls display message in the view


//View - presentation

//function for displaying the gamepiece on gameboard based on the model

//function for displaying which user's (X or O) turn it is

//function for displaying message if a user has won

//function for displaying message if there is a tie - called from model



//Controller - user input

// //create clickHandler for click on placing piece
// var clickPieces = document.getElementsByTagName("td");
// //iterate over the clickPieces array and add eventListeners to each square
// for (var i = 0; i < clickPieces.length; i++) {
//   clickPiece[i].addEventListener("click", addPiece);
//   console.log(clickPiece[i]);
// }



// //create clickHandler for clicking reset button
// //resets the gameBoard in model to gameBoard initial
// //create variable to refer to reset button
window.onload = function () {
  var resetButton = document.querySelector(".resetButton");
  //create the event listener
    resetButton.addEventListener("click", reset);
};


//call the reset function to start the game
reset();
