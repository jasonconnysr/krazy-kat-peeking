import * as React from 'react';
import styles from './Header.scss';

const Header : React.FC = () => {
    return (
        <header className={styles.block}>
            <h1>logo</h1>
        </header>
    );
};

export default Header;
