import { fetch } from '../fetch';
import User from '../types/User';
import * as log from 'loglevel';

const getUser = async (): Promise<User | null> => {
    try {
        return await fetch('/json/mockUser.json')
    } catch (error) {
        log.info(error);
        return null;
    }
};

export { getUser };
