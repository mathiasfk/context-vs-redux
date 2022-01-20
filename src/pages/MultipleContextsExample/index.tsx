import React, { useState } from 'react';
import { Header } from './components/Header';
import { Details } from './components/Details';
import { UserType } from '../../types/UserType';
import { UserContext } from './contexts/UserContext';
import { CountContext } from './contexts/CountContext';
import { UserContextType } from '../../types/UserContextType';
import { CountContextType } from '../../types/CountContextType';

export default function MultipleContextsExample() {

  const [user, setUser] = useState<UserType>({
    name: 'John',
    lastName: 'Doe',
    email: 'jdoe@email.com'
  });

  const [count, setCount] = useState<number>(42);

  const userContext: UserContextType = 
  {
    user: user,
    setUser: setUser
  }

  const countContext: CountContextType = 
  {
    count: count,
    increment: () => setCount(count + 1),
    decrement: () => setCount(count - 1)
  }
  
  return (
  <div className='page'>
    <UserContext.Provider value={userContext}>
      <CountContext.Provider value={countContext}>
        <Header></Header>
        <Details></Details>
      </CountContext.Provider>
    </UserContext.Provider>
  </div>);
}