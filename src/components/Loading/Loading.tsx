import * as React from 'react';
import Spinner from '../Spinner';
import styles from './Loading.scss';

interface Props {
    children?: React.ReactNode,
    loaded: boolean
}

export const Loading : React.FC<Props> = props => {
    const { children, loaded } = props;

    if (loaded) {
        return (
            <>
                {children}
            </>
        );
    } else {
        return (
            <section className={styles.block}>
                <Spinner/>
            </section>
        );
    }
};
