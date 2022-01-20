import { createContext } from 'react';
import { UserContextType } from '../../types/UserContextType';

const DEFAULT_CONTEXT: UserContextType = {
    user: {
        name: '',
        lastName: '',
        email: ''
    },
    setUser: () => {}
};

export const UserContext = createContext(DEFAULT_CONTEXT);