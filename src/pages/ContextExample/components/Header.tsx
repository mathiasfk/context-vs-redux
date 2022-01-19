import React, { useContext } from 'react';
import { UserContext } from '../context';

export const Header = () => {
    const { name } = useContext(UserContext);
    return <div className='header'><h2>{name}</h2></div>;
}