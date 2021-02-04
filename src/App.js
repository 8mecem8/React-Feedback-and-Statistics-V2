import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {voteUpOf} from './reducers/anecdoteReducer'
import Notification from './components/Notification'
import {createNotification} from './reducers/mesReducer'
import Filter from './components/Filter'
import axios from 'axios'
import {initializeNotes} from './reducers/anecdoteReducer'
import {createNote} from './reducers/anecdoteReducer'


const App = () => {
  const anecdotes = useSelector(state => state.notes)
  const anecSorted = anecdotes.sort((at, ut) => ut.votes - at.votes)
  const store = useSelector(state => state)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(initializeNotes())                   // axios.get('http://localhost:3001/adts').then(re => dispatch(initializeNotes(re.data)))
  }, [dispatch]);



 const filteredState = anecSorted.filter(at => {return at.content.toLowerCase().includes(store.filter.toLowerCase());});                         //forFilteredState ? forFilteredState : anecSorted

//console.log('anecdotes is ======',anecdotes)



  const vote = async (id) => {

           const fg = anecdotes.find(at =>  at.id === id)

          dispatch(createNotification(fg.content))



          let att = await axios.get('http://localhost:3001/adts').then(re => {return  re.data.find(at => at.id === id) })

          let newVote = {...att, votes: att.votes + 1}

          console.log(newVote)

          dispatch(voteUpOf(newVote))

          setTimeout(() => {dispatch(createNotification(''));}, 5000);}




  const add = (e) => {
               e.preventDefault()
                let content = e.target.addContent.value
            dispatch(createNote(content))                                                           //axios.post('http://localhost:3001/adts',content).then(re => dispatch({type: 'ADDANEC',data: re}) )

            console.log('content is in the add func',content)

           //dispatch({type: 'ADDANEC',data: e.target.addContent.value})


dispatch(createNotification(`new anecdote '${content}'`))
setTimeout(() => {
  dispatch(createNotification(''))
}, 5000)



          }





  return (
    <div>
      
      <h1>Anecdotes</h1>
      <Notification/>
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