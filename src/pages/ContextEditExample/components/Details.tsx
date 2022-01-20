import React, { useContext } from 'react';
import { Field } from '../../../components/Field';
import { UserContext } from '../context';

export const Details = () => {
    const { user, setUser } = useContext(UserContext);
    const { name, lastName, email } = user;

    const updateField = (field: string, value: string) => {
        setUser({...user, [field]: value});
    }

    return (
        <div className='details'>
            <Field field={'Name'} value={name}></Field>
            <Field field={'Last name'} value={lastName}></Field>
            <Field field={'Email'} value={email}></Field>
            <input type="text" placeholder='Name' onChange={(e) => updateField('name', e.target.value)}></input>
            <input type="text" placeholder='Last name' onChange={(e) => updateField('lastName', e.target.value)}></input>
            <input type="text" placeholder='Email' onChange={(e) => updateField('email', e.target.value)}></input>
        </div>
    )
}