import React from 'react';
import { Field } from '../../../components/Field';
import { UserType } from '../../../types/user';

export const Details = (props:any) => {
    console.log('Details (PropsEditExample)');
    const currentUser: UserType = props.user;

    return (
        <div className='details'>
            <Field field={'Name'} value={currentUser.name}></Field>
            <Field field={'Last name'} value={currentUser.lastName}></Field>
            <Field field={'Email'} value={currentUser.email}></Field>
            <input type="text" placeholder='Name' onChange={(e) => props.updateField('name', e.target.value)}></input>
            <input type="text" placeholder='Last name' onChange={(e) => props.updateField('lastName', e.target.value)}></input>
            <input type="text" placeholder='Email' onChange={(e) => props.updateField('email', e.target.value)}></input>
        </div>
    )
}