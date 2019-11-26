import * as React from 'react';
import styles from './Footer.scss';

const Footer : React.FC = () => {
    return (
        <footer className={styles.block}>
            &copy; 2019 ShopRunner.
        </footer>
    )
};

export default Footer;
