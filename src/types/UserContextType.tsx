import React from 'react';
import { UserType } from './UserType';

export type UserContextType = {
    user: UserType;
    setUser: React.Dispatch<React.SetStateAction<UserType>>;
};
