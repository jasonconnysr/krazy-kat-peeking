import * as React from 'react';
import styles from './PrimaryFooter.scss';

const PrimaryFooter : React.FC = () => {
    return (
        <footer className={styles.block}>
            &copy; 2019 ShopRunner.
        </footer>
    )
};

export default PrimaryFooter;
