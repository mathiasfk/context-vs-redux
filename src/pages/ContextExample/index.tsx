import React from 'react';
import { Header } from './components/Header';
import { Details } from './components/Details';
import { UserType } from '../../types/user';
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
      <Details></Details>
    </UserContext.Provider>
  </div>);
}