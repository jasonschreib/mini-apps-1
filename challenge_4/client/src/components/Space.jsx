var Space = (props) => {
  return (
    <div onClick={props.handleClick} className='space'>
      {console.log('IN Space', props)}
      {props.element}
    </div>
  )

}



export default Space;