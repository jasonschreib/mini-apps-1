//Model - program state - the truth of my program
//create gameBoard variable
var gameBoard;

//create reset function - resets the gameBoard
var reset = function() {
  gameBoard = [
    [0, 0, 0]
    [0, 0, 0]
    [0, 0, 0]
  ];
  //create a message that appears saying it's a new game
  //TODO
  console.log('NEW GAME');
};

//create function to keep track of whose turn it is
var player = function() {
  //create first user as X
  var user = 1;
  //if user has addedPiece, then switch user
};

//create add piece function - access the correct box in the tictactow table and place a piece according to who is the current user
var addPiece = function() {

};

//create didWin function that returns a boolean, ends the game, and calls display message in the view

//create didTie function that returns a boolean, ends the game, and calls display message in the view



//View - presentation

//function for displaying the gamepiece on gameboard based on the model

//function for displaying which user's (X or O) turn it is

//function for displaying message if a user has won or there is a tie - called from model



//Controller - user input

//create clickHandler for click on placing piece
var clickPieces = document.getElementsByTagName("td");
//iterate over the clickPieces array and add eventListeners to each square
for (var i = 0; i < clickPieces.length; i++) {
  clickPiece[i].addEventListener("click", addPiece);
}



//create clickHandler for clicking reset button
//resets the gameBoard in model to gameBoard initial
//create variable to refer to reset button
var resetButton = document.getElementsByTagName("button");
//create the event listener - have to iterate over array for some reason even though there's one item
for (var i = 0; i < resetButton.length; i++) {
  resetButton[i].addEventListener("click", reset);
}


//call the reset function to start the game
reset();