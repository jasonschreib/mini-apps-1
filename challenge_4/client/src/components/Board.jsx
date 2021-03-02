import Row from './Row.jsx'

var Board = (props) => {
    return (
      <div>
        <div>Hello from React</div>
        {/* create a div for all the row components */}
        <div>
          {/* {console.log(props.board[0].row0)} */}
          <Row contents={props.board[0]} handleClick={props.handleClick}/>
          <Row contents={props.board[1]} handleClick={props.handleClick}/>
          <Row contents={props.board[2]} handleClick={props.handleClick}/>
          <Row contents={props.board[3]} handleClick={props.handleClick}/>
          <Row contents={props.board[4]} handleClick={props.handleClick}/>
          <Row contents={props.board[5]} handleClick={props.handleClick}/>
        </div>
      </div>
    )
}


export default Board;