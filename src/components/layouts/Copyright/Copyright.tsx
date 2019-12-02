import * as React from 'react';
import styles from './Copyright.scss';

export const Copyright : React.FC = () => {
    const commitHash: string = 'abc123';

    return (
        <div className={styles.block}>
            <p>&copy; 2019 ShopRunner. All rights reserved. rev {commitHash}</p>
        </div>
    );
};
