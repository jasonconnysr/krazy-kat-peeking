import * as React from 'react';
import Copyright from '../../Copyright';
import FatFooter from '../FatFooter';
import styles from './Footer.scss';



const Footer : React.FC = () => {
    return (
        <footer className={styles.block}>
            <FatFooter/>

            <Copyright/>
        </footer>
    )
};

export default Footer;
