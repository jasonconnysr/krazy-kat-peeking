import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from './FatFooter.scss';

export const FatFooter : React.FC = () => {
    return (
        <nav className={styles.block}>
            <section className={styles.column}>
                <h4 className={styles.heading}>Links</h4>

                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <Link
                            className={styles.link}
                            to={'#'}
                        >
                            Link
                        </Link>
                    </li>

                    <li className={styles.listItem}>
                        <Link
                            className={styles.link}
                            to={'#'}
                        >
                            Link
                        </Link>
                    </li>

                    <li className={styles.listItem}>
                        <Link
                            className={styles.link}
                            to={'#'}
                        >
                            Link
                        </Link>
                    </li>

                    <li className={styles.listItem}>
                        <Link
                            className={styles.link}
                            to={'#'}
                        >
                            Link
                        </Link>
                    </li>
                </ul>
            </section>

            <section className={styles.column}>
                <h4 className={styles.heading}>Links</h4>

                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <Link
                            className={styles.link}
                            to={'#'}
                        >
                            Link
                        </Link>
                    </li>

                    <li className={styles.listItem}>
                        <Link
                            className={styles.link}
                            to={'#'}
                        >
                            Link
                        </Link>
                    </li>

                    <li className={styles.listItem}>
                        <Link
                            className={styles.link}
                            to={'#'}
                        >
                            Link
                        </Link>
                    </li>

                    <li className={styles.listItem}>
                        <Link
                            className={styles.link}
                            to={'#'}
                        >
                            Link
                        </Link>
                    </li>
                </ul>
            </section>

            <section className={styles.column}>
                <h4 className={styles.heading}>Links</h4>

                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <Link
                            className={styles.link}
                            to={'#'}
                        >
                            Link
                        </Link>
                    </li>

                    <li className={styles.listItem}>
                        <Link
                            className={styles.link}
                            to={'#'}
                        >
                            Link
                        </Link>
                    </li>

                    <li className={styles.listItem}>
                        <Link
                            className={styles.link}
                            to={'#'}
                        >
                            Link
                        </Link>
                    </li>

                    <li className={styles.listItem}>
                        <Link
                            className={styles.link}
                            to={'#'}
                        >
                            Link
                        </Link>
                    </li>
                </ul>
            </section>

            <section className={styles.column}>
                <h4 className={styles.heading}>Links</h4>

                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <Link
                            className={styles.link}
                            to={'#'}
                        >
                            Link
                        </Link>
                    </li>

                    <li className={styles.listItem}>
                        <Link
                            className={styles.link}
                            to={'#'}
                        >
                            Link
                        </Link>
                    </li>

                    <li className={styles.listItem}>
                        <Link
                            className={styles.link}
                            to={'#'}
                        >
                            Link
                        </Link>
                    </li>

                    <li className={styles.listItem}>
                        <Link
                            className={styles.link}
                            to={'#'}
                        >
                            Link
                        </Link>
                    </li>
                </ul>
            </section>
        </nav>
    );
};
