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
      ]
    }
  }

  render() {
    return (
      <Board board={this.state.board}/>
    )
  }


}

ReactDOM.render(<App />, document.getElementById('app'));