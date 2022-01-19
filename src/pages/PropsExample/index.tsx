import React from 'react';
import { Header } from './components/Header';
import { Details } from './components/Details';
import { UserType } from '../../types/user';

export default function PropsExample() {

  const user: UserType = {
    name: 'John',
    lastName: 'Doe',
    email: 'jdoe@email.com'
  }
    return <div className='page'>
      <Header user={user}></Header>
      <Details user={user}></Details>
    </div>;
}