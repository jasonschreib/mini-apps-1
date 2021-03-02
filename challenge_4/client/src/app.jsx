import Board from './components/Board.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //state of the game board - row5 refers to the top and row0 refers to the bottom
      board :
      [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 2]
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
    // if (this.state.board[5].row5[col] === 0) {
    //   console.log('IN HERE FIRST');
    //   //then change it to a 1 or 2 depending on which player's turn it is
    //   this.setState({
    //     board[5].row5[col] : 5;
    //   });
    //   //otherwise if the element at ro4, col is a zero
    // } else if (this.state.board[4].row4[col] === 0) {
    //   console.log('IN HERE');
    //   //then change it to a 1 or 2 depending on which player's turn it is

    //   //otherwise if the element at row3, col is a zero
    // } else if (this.state.board[3].row3[col] === 0) {
    //   //then change it to a 1 or 2 depending on which player's turn it is
    //   this.state.board[3].row3[col] = this.state.currentPlayer;
    //   //otherwise if the element at row2, col is a zero
    // } else if (this.state.board[2].row2[col] === 0) {
    //   //then change it to a 1 or 2 depending on which player's turn it is
    //   this.state.board[2].row2[col] = this.state.currentPlayer;
    //   //otherwise if the element at row1, col is a zero
    // } else if (this.state.board[1].row1[col] === 0) {
    //   //then change it to a 1 or 2 depending on which player's turn it is
    //   this.state.board[1].row1[col] = this.state.currentPlayer;
    //   //otherwise if the element at row0, col is a zero
    // } else if (this.state.board[0].row0[col] === 0) {
    //   //then change it to a 1 or 2 depending on which player's turn it is
    //   this.state.board[0].row0[col] = this.state.currentPlayer;
    //   //otherwise, alert the user a piece cannot be added there
    // } else {
    //   //TODO: alert the user
    //   console.log('Piece cannot be added there');
    // }

    console.log('BOARD', this.state.board);
    //test for a tie - if testForTie function is true
      //invoke the alertOfTie function

    //test for a win -

    //change the currentPlayer
    //if the currentPlayer is a 1
      //then change it to 2
    //if the currentPlayer is a 2
      ///then change it to a 1
  }

  //function to test for a tie
  testForTie() {

  }

  //function to alert user that there was a tie in the game
  alertOfTie() {
    //create an alert box that pops up signifying a tie
  }


  testForWin() {

  }

  //function to alert user that there was a win in the game
  alertOfWin() {
    //create an alert box that pops up signifying the user that won
  }




  render() {
    return (
      <div>
      <Board board={this.state.board} handleClick={this.handleClickOnBoard}/>
      </div>
    )
  }


}

ReactDOM.render(<App />, document.getElementById('app'));