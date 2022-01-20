import React, { useContext } from 'react';
import { CountContext } from '../contexts/CountContext';
import { UserContext } from '../contexts/UserContext';

export const Header = () => {
    const { user: {name, lastName} } = useContext(UserContext);
    const { count } = useContext(CountContext);

    return (
        <div className='header'>
            <h2>{`${name} ${lastName} - ${count}`}</h2>
        </div>);
}