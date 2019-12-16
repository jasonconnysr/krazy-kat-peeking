import * as React from 'react';
import MemberContext from '../../../contexts/MemberContext';
import LogoLink from '../LogoLink';
import Auth from '../Auth';
import styles from './Header.scss';

interface Props {
    children?: React.ReactNode;
}

const Header : React.FC<Props> = props => {
    const { children } = props;

    return (
        <MemberContext.Consumer>
            {member => (
                <>
                    <header className={styles.block}>
                        <nav className={styles.nav}>
                            <LogoLink
                                href={'/home'}
                                format={'full'}
                            />

                            <h1>Welcome to ShopRunner {member.firstName} {member.lastName}!</h1>

                            <Auth/>
                        </nav>
                    </header>

                    {children}
                </>
            )}
        </MemberContext.Consumer>
    );
};

export default Header;
