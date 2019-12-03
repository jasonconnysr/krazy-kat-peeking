import * as React from 'react';
import LogoLink from '../../LogoLink';
import styles from './Header.scss';

const Header : React.FC = () => {
    return (
        <header className={styles.block}>
            <LogoLink
                href={'/home'}
                format={'logo'}
            />
        </header>
    );
};

export default Header;
