import React from 'react';
import { Header } from './components/Header';
import { DetailsBox } from './components/DetailsBox';
import { UserType } from '../../types/UserType';

export default function PropsExample() {

  const user: UserType = {
    name: 'John',
    lastName: 'Doe',
    email: 'jdoe@email.com'
  }
  
  return (
    <div className='page'>
      <Header user={user}></Header>
      <DetailsBox user={user}></DetailsBox>
    </div>);
}