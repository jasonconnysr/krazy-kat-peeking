import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.scss';

const Navigation : React.FC = () => {
    return (
        <nav className={styles.block}>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <NavLink
                        to={'/example'}
                        className={styles.link}
                        activeClassName={styles.linkActive}
                    >
                        Example
                    </NavLink>
                </li>

                <li className={styles.listItem}>
                    <NavLink
                        to={'/other-example'}
                        className={styles.link}
                        activeClassName={styles.linkActive}
                    >
                        Other Example
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default Navigation;
