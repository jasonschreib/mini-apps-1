import Circle from './Circle.jsx'

var Space = (props) => {
  return (
    <div element={props.element} onClick={props.handleClick} className='space'>
      {console.log('IN Space', props.element)}
      {/* call the circle component (inside the space) */}
      < Circle element={props.element}/>
    </div>
  )

}



export default Space;