import * as React from 'react';
import Copyright from '../../Copyright';
import styles from './Footer.scss';

const Footer : React.FC = () => {
    return (
        <footer className={styles.block}>
            <Copyright/>
        </footer>
    )
};

export default Footer;
