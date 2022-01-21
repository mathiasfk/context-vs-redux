import React, { useState } from 'react';
import { Header } from './components/Header';
import { DetailsBox } from './components/DetailsBox';
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
      <DetailsBox user={user} updateField={updateField}></DetailsBox>
    </div>);
}