var Circle = (props) => {
  return (
    <div onClick={props.handleClick} className='space'>
      {console.log('IN CIRCLE', props)}
      {props.element}
    </div>
  )

}



export default Circle;