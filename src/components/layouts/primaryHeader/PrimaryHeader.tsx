import * as React from 'react';
import MemberContext from '../../../contexts/MemberContext';
import styles from './PrimaryHeader.scss';

interface Props {
    children?: React.ReactNode;
}

const PrimaryHeader : React.FC<Props> = props => {
    const { children } = props;

    return (
        <MemberContext.Consumer>
            {member => (
                <>
                    <header className={styles.block}>
                        <h1>Welcome to ShopRunner {member.firstName} {member.lastName}!</h1>
                    </header>

                    {children}
                </>
            )}
        </MemberContext.Consumer>
    );
};

export default PrimaryHeader;
