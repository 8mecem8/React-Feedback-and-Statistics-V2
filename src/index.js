import React from 'react'
import ReactDOM from 'react-dom'
import { createStore,combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import reducer from './reducers/anecdoteReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import notificationReducer from './reducers/mesReducer'
import filterReducer from './reducers/filterReducer'





const Creduser = combineReducers({
  notes: reducer,
  notification: notificationReducer,
  filter: filterReducer
})

const store = createStore(Creduser ,composeWithDevTools())



//console.group('main store is ===', store.getState())
store.subscribe(() => console.log('subscribe store info is =====',store.getState()))





ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)