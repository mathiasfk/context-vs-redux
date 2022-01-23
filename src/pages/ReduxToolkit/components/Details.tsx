import React from 'react';
import { Field } from '../../../components/Field';
import { decrement, increment } from '../counterSlice';
import { setName, setLastName, setEmail } from '../userSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Details = () => {

    const { name, lastName, email } = useSelector((state: any) => state.user);
    const dispatch = useDispatch();

    return (
        <div className='details'>
            <Field field={'Name'} value={name}></Field>
            <Field field={'Last name'} value={lastName}></Field>
            <Field field={'Email'} value={email}></Field>
            <input type="text" placeholder='Name' onChange={(e) => dispatch(setName(e.target.value))}></input>
            <input type="text" placeholder='Last name' onChange={(e) => dispatch(setLastName(e.target.value))}></input>
            <input type="text" placeholder='Email' onChange={(e) => dispatch(setEmail(e.target.value))}></input>
            <div>
                <input type="button" onClick={() => dispatch(increment())} value="+"></input>
                <input type="button" onClick={() => dispatch(decrement())} value="-"></input>
            </div>
        </div>
    )
}