import React from 'react'
import { useSelector, useDispatch  } from 'react-redux'
import {createFilter} from '../reducers/filterReducer'

const Filter = () => {
//const anecdotes = useSelector(state => state.notes)
const dispatch = useDispatch()



  const handleChange = (event) => {
     // console.log(event.target.value)
    let ftData = event.target.value             //anecdotes.filter((at) => new RegExp(event.target.value, 'i').test(at.content))
    
       dispatch(createFilter(ftData))
        

  }
  const style = {
    marginBottom: 10,
    
  }
 
 //console.log(handle)
  return (
    <div style={style}>
      filter <input id="inputSearch" onChange={handleChange} />
    </div>
  )
}

export default Filter