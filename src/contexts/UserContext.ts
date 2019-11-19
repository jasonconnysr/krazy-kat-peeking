import * as React from 'react';
import User from '../types/User';

export const defaultUser: User = {
    firstName: '',
    lastName: ''
};

const UserContext = React.createContext(defaultUser);

export default UserContext;
