import * as React from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import styles from './MainNavBar.scss';


interface IMainNavBarProps {
    classes?: string,
    links: Array<MainNavBarLink>
}

const MainNavBar : React.FC<IMainNavBarProps> = props => {
    const { classes, links } = props;

    const renderLinks = (links: Array<MainNavBarLink>) => {
        return links.filter(link => !!link)
            .map((link, index) => {
                return (
                    <li
                        className={styles.listItem}
                        key={index}
                    >
                        <NavLink
                            to={link.path}
                            className={styles.link}
                            activeClassName={styles.linkActive}
                        >
                            {link.name}
                        </NavLink>
                    </li>
                )
            })
    };

    return (
        <nav className={classnames(
            styles.block,
            {[`${classes}`] : props.classes}
        )}>
            <ul className={styles.list}>
                {links.length > 0 && renderLinks(links)}
            </ul>
        </nav>
    )
};

export default MainNavBar;
