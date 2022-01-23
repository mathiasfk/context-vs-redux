import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { Header } from './components/Header';
import { DetailsBox } from './components/DetailsBox';
import { counterReducer } from './counterSlice';
import { userReducer } from './userSlice';

export default function ReduxToolkit() {

  let store = configureStore({
    reducer: {
      counter: counterReducer,
      user: userReducer,
    },
    devTools: true
});
  
  return (
  <div className='page'>
    <Provider store={store}>
      <Header></Header>
      <DetailsBox></DetailsBox>
    </Provider>
  </div>);
}