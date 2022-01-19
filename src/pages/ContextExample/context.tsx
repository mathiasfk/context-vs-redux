import React, { createContext } from 'react';
import { UserType } from '../../types/user';

const DEFAULT_USER: UserType = {
    name: '',
    lastName: '',
    email: ''
};

export const UserContext = createContext(DEFAULT_USER);