import React from 'react'
import { createStore } from 'redux'


function counterReducer(state = { value: 0 }, action: { type: string }) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 }
    case 'counter/decremented':
      return { value: state.value - 1 }
    default:
      return state
  }
}

let store = createStore(counterReducer)

store.subscribe(() => console.log(store.getState()))

export default function Redux101() {
    return (
        <div className='details-box'>
            <input type="button" onClick={() => store.dispatch({ type: 'counter/incremented' })} value="+"></input>
            <input type="button" onClick={() => store.dispatch({ type: 'counter/decremented' })} value="-"></input>
        </div>
    )
}