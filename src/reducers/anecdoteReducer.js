const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)







export const voteUpOf = (id) => {
  return {
      type: 'VOTEUP',
      data: id

  }

}






const reducer = (state = initialState, action) => {
  //console.log('state now: ', Object.values(state))
 // console.log('action', action.id)

  switch(action.type){

    case 'VOTEUP':
       let fAnec = state.find(at =>  at.id === action.data)
         fAnec = {
          ...fAnec,
           votes: fAnec.votes + 1
         }                                                                                        // content: fAnec.content,id: fAnec.id,

       return state.map(at => at.id !== action.data ? at : fAnec)
     case 'ADDANEC':

let att = getId()

         
      let  addNewCon = {
          content: action.data,
          id:  att  === state.map(at => at.id) ? getId() : att ,
          votes: 0
        }
console.log(addNewCon)
       return state.concat(addNewCon)
    default:
  return state
  }
}

export default reducer



//Object.values(state)