var Circle = (props) => {
  //conditonal rendering of different color circle based on click
  const player = props.element;

  return (
    <div>
      {(() => {
        if (player === 0) {
          return (
            <div onClick={props.handleClick}
            className='defaultCircle'>
            </div>
          )
        } else if (player === 1) {
          return (
            <div onClick={props.handleClick}
            className='redCircle'>
            </div>
          )
        } else {
          return (
            <div onClick={props.handleClick}
            className='yellowCircle'>
            </div>
          )
        }
      }
      )()}
    </div>
  )


  // return (
  //   <div onClick={props.handleClick} className='defaultCircle'>
  //     </div>
  // )
}








export default Circle;