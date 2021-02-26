import Row from './Row.jsx'

var Board = (props) => {
    return (
      <div>
        <div>Hello from React</div>
        {/* create a div for all the row components */}
        <div>
          {/* {console.log(props.board[0].row0)} */}
          <Row contents={props.board[0].row0} handleClick={props.handleClick}/>
          <Row contents={props.board[1].row1} handleClick={props.handleClick}/>
          <Row contents={props.board[2].row2} handleClick={props.handleClick}/>
          <Row contents={props.board[3].row3} handleClick={props.handleClick}/>
          <Row contents={props.board[4].row4} handleClick={props.handleClick}/>
          <Row contents={props.board[5].row5} handleClick={props.handleClick}/>
        </div>
      </div>
    )
}


export default Board;