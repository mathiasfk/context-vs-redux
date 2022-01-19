import React from 'react';
import { Field } from '../../../components/Field';
import { UserType } from '../../../types/user';

export const Details = (props:any) => {
    const currentUser: UserType = props.user;

    return (
        <div className='details'>
            <Field field={'Name'} value={currentUser.name}></Field>
            <Field field={'Last name'} value={currentUser.lastName}></Field>
            <Field field={'Email'} value={currentUser.email}></Field>
        </div>
    )
}