import * as React from 'react';
import * as Loadable from 'react-loadable';
import * as log from 'loglevel';
import ErrorMessage from '../components/ErrorMessage';
import Spinner from '../components/Spinner';
import styles from './ReactLoadable.scss';

// custom Loading component specifically for react-loadable.
// If there is an error thrown from react-loadable, error prop
// is true and error is displayed. If more than 200ms have elapsed
// (default), then pastDelay prop is true and Spinner renders. This
// prevents flashing of spinner on fast page loads. Finally, if
// more than 10 seconds elapse, the timedOut prop is true and an
// error is displayed.
const GlobalLoading = (error: boolean, pastDelay: boolean, timedOut: boolean) => {
    if (error) {
        // TODO: Why does this immediately throw this error??
        log.info('ReactLoadable has brief error state');
        return null;
    } else if (pastDelay) {
        return (
            <section className={styles.block}>
                <Spinner/>
            </section>
        );
    } else if (timedOut) {
        return (
            <ErrorMessage errorMessageText={'Your request timed out.'} />
        );
    }

    return null;
};

const CustomLoadable = (opts: any) => Loadable({ ...opts, loading: GlobalLoading, timeout: 10000 });

export default CustomLoadable;
