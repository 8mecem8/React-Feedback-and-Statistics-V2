import React from 'react'
import { useSelector} from 'react-redux'





const Notification = () => {
  const notification = useSelector(state => state.notification);

  const style = {border: 'solid',padding: 3,borderWidth: 1}

  return (
    <>
    {!notification ? <div></div> : <div style={style}><p>You voted '{notification}'</p></div>} 
    </>
  )
}

export default Notification