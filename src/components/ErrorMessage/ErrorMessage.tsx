import * as React from 'react';
import styles from './ErrorMessage.scss';

interface Props {
    errorMessageText: string | null;
}

export const ErrorMessage : React.FC<Props> = props => {
    const { errorMessageText } = props;

    return (
        <section className={styles.block}>
            {errorMessageText ? (
                <p className={styles.text}>{errorMessageText}</p>
            ) : (
                <p className={styles.text}>An error occurred.</p>
            )}
        </section>
    );
};
