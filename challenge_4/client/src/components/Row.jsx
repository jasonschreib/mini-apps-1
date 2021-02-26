import Circle from './Circle.jsx'

var Row = (props) => {
  return (
    <div>
      {/* create a circle for each element in the row */}
      <Circle element={props.contents[0]} handleClick={() => props.handleClick(0)}/>
      <Circle element={props.contents[1]}/>
      <Circle element={props.contents[2]}/>
      <Circle element={props.contents[3]}/>
      <Circle element={props.contents[4]}/>
      <Circle element={props.contents[5]}/>
      <Circle element={props.contents[6]}/>
    </div>
  )
}

export default Row;