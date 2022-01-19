import React, { useContext } from 'react';
import { UserContext } from '../context';

export const Header = () => {
    const { name, lastName } = useContext(UserContext);
    return (
        <div className='header'>
            <h2>{`${name} ${lastName}`}</h2>
        </div>);
}