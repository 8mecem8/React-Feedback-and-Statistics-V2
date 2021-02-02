import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {voteUpOf} from './reducers/anecdoteReducer'
import Notification from './components/Notification'
import {createNotification} from './reducers/mesReducer'
import Filter from './components/Filter'




const App = () => {
  const anecdotes = useSelector(state => state.notes)
  const anecSorted = anecdotes.sort((at, ut) => ut.votes - at.votes)
  const store = useSelector(state => state)
  const dispatch = useDispatch()


 const filteredState = anecSorted.filter(at => {return at.content.toLowerCase().includes(store.filter.toLowerCase());});                         //forFilteredState ? forFilteredState : anecSorted

console.log('anecdotes is ======',anecdotes)



  const vote = (id) => {

           const fg = anecdotes.find(at =>  at.id === id)

          dispatch(createNotification(fg.content))
          dispatch(voteUpOf(id))

          setTimeout(() => {dispatch(createNotification(''));}, 5000);}




  const add = (e) => {
               e.preventDefault()
           dispatch({type: 'ADDANEC',data: e.target.addContent.value})}





  return (
    <div>
      <Notification/>
      <h2>Anecdotes</h2>
      <Filter />
      {filteredState.map(anecdote =>
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