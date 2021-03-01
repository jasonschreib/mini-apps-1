import Board from './components/Board.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //state of the game board - row5 refers to the top and row0 refers to the bottom
      board :
      [
        {row0 : [0, 0, 0, 0, 0, 0, 0]},
        {row1 : [0, 0, 0, 0, 0, 0, 0]},
        {row2 : [0, 0, 0, 0, 0, 0, 0]},
        {row3 : [0, 0, 0, 0, 0, 0, 0]},
        {row4 : [0, 0, 0, 0, 0, 0, 0]},
        {row5 : [1, 0, 0, 0, 0, 0, 2]}
      ],
      current: 1
    }

    this.handleClickOnBoard = this.handleClickOnBoard.bind(this);
  }

  //function to handle clicks on the board
  handleClickOnBoard(col) {
    console.log('Clicked on column', col);
    //change the state to reflect the click on the column
    //check the column that was passed in
    //if the element at row5, col is a zero
      //then change it to a 1 or 2 depending on which player's turn it is
    //otherwise if the element at ro4, col is a zero
      //then change it to a 1 or 2 depending on which player's turn it is
    //otherwise if the element at row3, col is a zero
      //then change it to a 1 or 2 depending on which player's turn it is
    //otherwise if the element at row2, col is a zero
      //then change it to a 1 or 2 depending on which player's turn it is
    //otherwise if the element at row1, col is a zero
      //then change it to a 1 or 2 depending on which player's turn it is
    //otherwise if the element at row0, col is a zero
      ///then change it to a 1 or 2 depending on which player's turn it is

    //test for a tie

    //test for a win
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