import * as React from 'react';
import { UserContext } from '../../../contexts/UserContext';
import styles from './PrimaryHeader.scss';

type Props = {};

const PrimaryHeader : React.FC<Props> = props => {
    return (
        <UserContext.Consumer>
            {user => (
                <header className={styles.block}>
                    <h1>Welcome to ShopRunner {user.firstName} {user.lastName}!</h1>
                </header>
            )}
        </UserContext.Consumer>
    );
};

export default PrimaryHeader;
