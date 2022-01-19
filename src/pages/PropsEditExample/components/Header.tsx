import React from 'react';
import { UserType } from '../../../types/user';

export const Header = (props:any) => {
    const currentUser: UserType = props.user;
    return (
    <div className='header'>
        <h2>{`${currentUser.name} ${currentUser.lastName}`}</h2>
    </div>);
}