import React, { useState } from 'react';
import { Header } from './components/Header';
import { Details } from './components/Details';
import { UserType } from '../../types/UserType';



export default function PropsEditExample() {

  const [user, setUser] = useState<UserType>({
    name: 'John',
    lastName: 'Doe',
    email: 'jdoe@email.com'
  });

  const updateField = (field: string, value: string) => {
    setUser({...user, [field]: value});
  }

  return (
    <div className='page'>
      <Header user={user}></Header>
      <Details user={user} updateField={updateField}></Details>
    </div>);
}