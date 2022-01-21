import React from 'react';
import { Header } from './components/Header';
import { DetailsBox } from './components/DetailsBox';
import { UserType } from '../../types/UserType';
import { UserContext } from './context';

export default function ContextExample() {

  const user: UserType = {
    name: 'John',
    lastName: 'Doe',
    email: 'jdoe@email.com'
  }
  
  return (
  <div className='page'>
    <UserContext.Provider value={user}>
      <Header></Header>
      <DetailsBox></DetailsBox>
    </UserContext.Provider>
  </div>);
}