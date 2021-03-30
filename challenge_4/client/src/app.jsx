import Board from './components/Board.jsx'

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
      console.log('IN HERE FIRST');
      const newState = this.state.board.slice();
      //then change it to a 1 or 2 depending on which player's turn it is
      newState[5][col] = this.state.currentPlayer;
      this.setState({
        board: newState
      });
      //test for a tie - if testForTie function is true
      if (this.testForTie()) {
        //invoke the alertOfTie function
        this.alertOfTie();
      }

      //test for a win -

      //invoke function to change current player
      this.changePlayer();
      //otherwise if the element at ro4, col is a zero
    } else if (this.state.board[4][col] === 0) {
      console.log('IN HERE');
      const newState = this.state.board.slice();
      //then change it to a 1 or 2 depending on which player's turn it is
      newState[4][col] = this.state.currentPlayer;
      this.setState({
        board: newState
      });
      //test for a tie - if testForTie function is true
      if (this.testForTie()) {
        //invoke the alertOfTie function
        this.alertOfTie();
      }

      //test for a win -

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
      //test for a tie - if testForTie function is true
      if (this.testForTie()) {
        //invoke the alertOfTie function
        this.alertOfTie();
      }

      //test for a win -

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
      //test for a tie - if testForTie function is true
      if (this.testForTie()) {
        //invoke the alertOfTie function
        this.alertOfTie();
      }

      //test for a win -

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
      //test for a tie - if testForTie function is true
    if (this.testForTie()) {
      //invoke the alertOfTie function
      this.alertOfTie();
    }

    //test for a win -

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
    if (this.testForTie()) {
      //invoke the alertOfTie function
      this.alertOfTie();
    }

    //test for a win -

    //invoke function to change current player
    this.changePlayer();
      //otherwise, alert the user a piece cannot be added there
    } else {
      //TODO: alert the user
      console.log('Piece cannot be added there');
    }
  }

  //function to test for a tie
  testForTie() {
    //tie occurs if all spaces are filled and no win has been detected
    //create bool for allSpacesFilled - starts as true
    //iterate over the board state
    //if a space on the board is a 0
    //change allSpacesFilled to false
    //return
    //if allSpacesFilled var is true and no win detected
    //return true
  }

  //function to alert user that there was a tie in the game
  alertOfTie() {
    //TODO: create an alert box that pops up signifying a tie
    console.log('There is a tie')
  }

  //function to test for win in game for the current player
  testForWin() {
    //iterate over the state of the board
    //if the current item is a value that matches the currentPlayer in state
    //test for a row win
    //if the current value and the next 3 vals all match the currentPlayer in state
    //return true
    //test for a column wins
    //if the current value and the next 3 vals in the same col all match the currentPlayer in state
    //return true
    //test for a major diagonal win
    //if the current value and the next 3 vals in the diag all match the currentPlayer in state
    //return true
    //test for a minor diag win
    //if the current value and the next 3 vals in the diag all match the currentPlayer in state
    //return trues
    //otherwise return false
  }

  //function to alert user that there was a win in the game
  alertOfWin() {
    //create an alert box that pops up signifying the user that won
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