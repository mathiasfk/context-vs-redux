import React from 'react';
import { useSelector } from 'react-redux';

export const Header = () => {

    const count = useSelector((state: any) => state.counter.value);
    const { name, lastName } = useSelector((state: any) => state.user);

    return (
        <div className='header'>
            <h2>{`${name} ${lastName} - ${count}`}</h2>
        </div>);
}