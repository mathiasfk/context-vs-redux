import React, { useState } from 'react';
import { Header } from './components/Header';
import { Details } from './components/Details';
import { UserType } from '../../types/UserType';
import { UserContext } from './context';
import { UserContextType } from '../../types/UserContextType';

export default function ContextEditExample() {

  const [user, setUser] = useState<UserType>({
    name: 'John',
    lastName: 'Doe',
    email: 'jdoe@email.com'
  });

  const userContext: UserContextType = 
  {
    user: user,
    setUser: setUser
  }
  
  return (
  <div className='page'>
    <UserContext.Provider value={userContext}>
      <Header></Header>
      <Details></Details>
    </UserContext.Provider>
  </div>);
}