import * as React from 'react';
import classnames from 'classnames';
import styles from './Spinner.scss';

interface Props {
    small?: boolean;
}

const Spinner : React.FC<Props> = props => {
    const { small } = props;

    return (
        <div
            className={classnames(
                styles.block,
                {[`${styles.blockSmall}`] : small}
            )}
        >
            <div className={styles.dot1}/>
            <div className={styles.dot2}/>
        </div>
    );
};

export default Spinner;
