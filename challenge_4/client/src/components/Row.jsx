import Space from './Space.jsx'

var Row = (props) => {
  return (
    <div>
      {/* create a circle for each element in the row */}
      <Space element={props.contents[0]} handleClick={() => props.handleClick(0)}/>
      <Space element={props.contents[1]} handleClick={() => props.handleClick(1)}/>
      <Space element={props.contents[2]} handleClick={() => props.handleClick(2)}/>
      <Space element={props.contents[3]} handleClick={() => props.handleClick(3)}/>
      <Space element={props.contents[4]} handleClick={() => props.handleClick(4)}/>
      <Space element={props.contents[5]} handleClick={() => props.handleClick(5)}/>
      <Space element={props.contents[6]} handleClick={() => props.handleClick(6)}/>
    </div>
  )
}

export default Row;