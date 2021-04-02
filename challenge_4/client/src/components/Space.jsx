import Circle from './Circle.jsx'

var Space = (props) => {
  return (
    <div onClick={props.handleClick} className='space'>
      {/* call the circle component (inside the space) */}
      < Circle element={props.element}/>
    </div>
  )

}



export default Space;