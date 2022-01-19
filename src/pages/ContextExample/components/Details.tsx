import React, { useContext } from 'react';
import { Field } from '../../../components/Field';
import { UserContext } from '../context';

export const Details = () => {
    const { name, lastName, email } = useContext(UserContext);

    return (
        <div className='details'>
            <Field field={'Name'} value={name}></Field>
            <Field field={'Last name'} value={lastName}></Field>
            <Field field={'Email'} value={email}></Field>
        </div>
    )
}