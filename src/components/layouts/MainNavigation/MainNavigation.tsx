import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MainNavigation.scss';

const MainNavigation : React.FC = () => {
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

                <li className={styles.listItem}>
                    <NavLink
                        to={'/secondary-example'}
                        className={styles.link}
                        activeClassName={styles.linkActive}
                    >
                        Secondary Example
                    </NavLink>
                </li>

                <li className={styles.listItem}>
                    <NavLink
                        to={'/form-example'}
                        className={styles.link}
                        activeClassName={styles.linkActive}
                    >
                        Form Example
                    </NavLink>
                </li>

                <li className={styles.listItem}>
                    <NavLink
                        to={'/error'}
                        className={styles.link}
                        activeClassName={styles.linkActive}
                    >
                        Error
                    </NavLink>
                </li>

                <li className={styles.listItem}>
                    <NavLink
                        to={'/loading'}
                        className={styles.link}
                        activeClassName={styles.linkActive}
                    >
                        Loading
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default MainNavigation;
