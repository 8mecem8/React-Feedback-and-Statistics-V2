import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {voteUpOf} from './reducers/anecdoteReducer'


const App = () => {
  const anecdotes = useSelector(state => state)
  const anecSorted = anecdotes.sort((at, ut) => ut.votes - at.votes)

  const dispatch = useDispatch()



  const vote = (id) => {
    
          dispatch(voteUpOf(id))
  }


  const add = (e) => {
      e.preventDefault()

console.log("e.target.addContent.value is",e.target.addContent.value)

      dispatch({
        type: 'ADDANEC',
        data: e.target.addContent.value
      })
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecSorted.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={add}>
        <div><input name="addContent" /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App