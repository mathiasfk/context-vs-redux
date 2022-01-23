import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Header } from './components/Header';
import { DetailsBox } from './components/DetailsBox';


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

export default function ReactRedux() {

  let store = createStore(counterReducer, composeWithDevTools());
  
  return (
  <div className='page'>
    <Provider store={store}>
      <Header></Header>
      <DetailsBox></DetailsBox>
    </Provider>
  </div>);
}