import Board from './components/Board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //state of the game board - row5 refers to the top and row0 refers to the bottom
      board:
        [
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0]
        ],
      currentPlayer: 1
    }

    this.handleClickOnBoard = this.handleClickOnBoard.bind(this);
  }

  //function to handle clicks on the board
  handleClickOnBoard(col) {
    console.log('Clicked on column', col);
    //change the state to reflect the click on the column
    //check the column that was passed in
    //if the element at row5, col is a zero
    if (this.state.board[5][col] === 0) {
      const newState = this.state.board.slice();
      //then change it to a 1 or 2 depending on which player's turn it is
      newState[5][col] = this.state.currentPlayer;
      this.setState({
        board: newState
      });
      //test for a win -
      if (this.testForWin(this.state.board)) {
        this.alertOfWin();
      }
      //invoke function to change current player
      this.changePlayer();
      //otherwise if the element at ro4, col is a zero
    } else if (this.state.board[4][col] === 0) {
      const newState = this.state.board.slice();
      //then change it to a 1 or 2 depending on which player's turn it is
      newState[4][col] = this.state.currentPlayer;
      this.setState({
        board: newState
      });
      //test for a win -
      if (this.testForWin(this.state.board)) {
        this.alertOfWin();
      }
      //invoke function to change current player
      this.changePlayer();
      //otherwise if the element at row3, col is a zero
    } else if (this.state.board[3][col] === 0) {
      const newState = this.state.board.slice();
      //then change it to a 1 or 2 depending on which player's turn it is
      newState[3][col] = this.state.currentPlayer;
      this.setState({
        board: newState
      });
      //test for a win -
      if (this.testForWin(this.state.board)) {
        this.alertOfWin();
      }
      //invoke function to change current player
      this.changePlayer();
      //otherwise if the element at row2, col is a zero
    } else if (this.state.board[2][col] === 0) {
      const newState = this.state.board.slice();
      //then change it to a 1 or 2 depending on which player's turn it is
      newState[2][col] = this.state.currentPlayer;
      this.setState({
        board: newState
      });
      //test for a win -
      if (this.testForWin(this.state.board)) {
        this.alertOfWin();
      }
      //invoke function to change current player
      this.changePlayer();
      //otherwise if the element at row1, col is a zero
    } else if (this.state.board[1][col] === 0) {
      const newState = this.state.board.slice();
      //then change it to a 1 or 2 depending on which player's turn it is
      newState[1][col] = this.state.currentPlayer;
      this.setState({
        board: newState
      });
      //test for a win -
      if (this.testForWin(this.state.board)) {
        this.alertOfWin();
      }
      //invoke function to change current player
      this.changePlayer();
      //otherwise if the element at row0, col is a zero
    } else if (this.state.board[0][col] === 0) {
      const newState = this.state.board.slice();
      //then change it to a 1 or 2 depending on which player's turn it is
      newState[0][col] = this.state.currentPlayer;
      this.setState({
        board: newState
      });
      //test for a tie - if testForTie function is true
      if (this.testForTie(this.state.board)) {
        //invoke the alertOfTie function
        this.alertOfTie();
      }
      //test for a win -
      else if (this.testForWin(this.state.board)) {
        this.alertOfWin();
      }
      //invoke function to change current player
      this.changePlayer();
      //otherwise, alert the user a piece cannot be added there
    } else {
      //TODO: alert the user
      console.log('Piece cannot be added there');
    }
  }

  //function to test for a tie - pass in the state of the board
  testForTie(board) {
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
    if (allSpacesFilled && !this.testForWin()) {
      //return allSpaces filled
      return true;
    }
  }

  //function to alert user that there was a tie in the game
  alertOfTie() {
    //TODO: create an alert box that pops up signifying a tie
    console.log('There is a tie');
  }

  //function to test for win in game for the current player
  //pass in the board state as an input
  testForWin(board) {
    //iterate over the state of the board
    for (var i = 0; i < board.length; i++) {
      for (var j = 0; j < board[0].length; j++) {
        //if the current item is a value that matches the currentPlayer in state
        if (board[i][j] === this.state.currentPlayer) {
          //test for row win - if current value and next 3 vals all match currentPlayer in state
          if (board[i][j + 1] === this.state.currentPlayer && board[i][j + 2] === this.state.currentPlayer && board[i][j + 3] === this.state.currentPlayer) {
            //return true
            return true;
          }
          //test for column win - if current value and next 3 vals in the same col all match currentPlayer in state
          else if ((i + 3 < board.length)&&(board[i + 1][j] === this.state.currentPlayer && board[i + 2][j] === this.state.currentPlayer && board[i + 3][j] === this.state.currentPlayer)) {
            //return true
            return true;
          }
          //test for major diagonal win - if current value and next 3 vals in diag all match currentPlayer in state
          else if ((i + 3 > 0 && i + 3 < board.length && j + 3 > 0 && j + 3 < board[0].length)&&(board[i + 1][j + 1] === this.state.currentPlayer && board[i + 2][j + 2] === this.state.currentPlayer && board[i + 3][j + 3] === this.state.currentPlayer)) {
            //return true
            return true;
          }
          //test for minor diag win - if current value and next 3 vals in diag all match currentPlayer in state
          else if ((i - 3 > 0 && i - 3 < board.length && j + 3 > 0 && j + 3 < board[0].length)&&(board[i - 1][j + 1] === this.state.currentPlayer && board[i - 2][j + 2] === this.state.currentPlayer && board[i - 3][j + 3] === this.state.currentPlayer)) {
            //return true
            return true;
          }
        }
      }
    }
    //catch all = return false
    return false;
  }

  //function to alert user that there was a win in the game
  alertOfWin() {
    //create an alert box that pops up signifying the user that won
    console.log('There is a winner: Player ' + this.state.currentPlayer);
  }

  //change the currentPlayer
  changePlayer() {
    //if the currentPlayer is a 1
    if (this.state.currentPlayer === 1) {
      //then change it to 2
      this.setState({
        currentPlayer: 2
      });
      //if the currentPlayer is a 2
    } else if (this.state.currentPlayer === 2) {
      //then change it to a 1
      this.setState({
        currentPlayer: 1
      });
    }
  }


  render() {
    return (
      <div>
        <Board board={this.state.board} handleClick={this.handleClickOnBoard} />
      </div>
    )
  }


}

ReactDOM.render(<App />, document.getElementById('app'));

export default {testForTie, testForWin};