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
        {row5 : [0, 0, 0, 0, 0, 0, 0]}
      ],
      current: 1
    }

    this.handleClickOnBoard = this.handleClickOnBoard.bind(this);
  }

  //function to handle clicks on the board
  handleClickOnBoard(col) {
    console.log('Clicked on column', col);
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