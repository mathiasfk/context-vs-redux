import { createContext } from 'react';
import { CountContextType } from '../../../types/CountContextType';

const DEFAULT_CONTEXT: CountContextType = {
    count: 0,
    increment: () => {},
    decrement: () => {}
};

export const CountContext = createContext(DEFAULT_CONTEXT);