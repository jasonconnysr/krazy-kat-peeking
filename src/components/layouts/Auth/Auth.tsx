import * as React from 'react';
import styles from './Auth.scss';

export const Auth : React.FC = () => {
    const signedIn: boolean = false;

    return (
        <button
            className={styles.block}
        >
            {signedIn ? 'Sign Out' : 'Sign In'}
        </button>
    );
};
