import * as React from 'react';
import styles from './PrimaryFooter.scss';

type Props = {};

const PrimaryFooter : React.FC<Props> = props => {
    return (
        <footer className={styles.block}>
            &copy; 2019 ShopRunner.
        </footer>
    )
};

export default PrimaryFooter;
