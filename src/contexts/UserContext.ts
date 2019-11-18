import * as React from 'react';
import User from '../types/User';

const defaultUser: User = {
    firstName: '',
    lastName: ''
};

export const UserContext = React.createContext(defaultUser);
