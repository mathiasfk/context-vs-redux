import React from 'react';
import { useSelector } from 'react-redux';

export const Header = () => {

    const count = useSelector((state: any) => state.value);

    return (
        <div className='header'>
            <h2>{`${count}`}</h2>
        </div>);
}