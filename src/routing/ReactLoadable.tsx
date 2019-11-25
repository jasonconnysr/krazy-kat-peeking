import * as React from 'react';
import * as Loadable from 'react-loadable';
import * as log from 'loglevel';
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
        log.info('ReactLoadable has brief error state');
        return null;
    } else if (pastDelay) {
        return (
            <div className={styles.block}>
                <Spinner/>
            </div>
        );
    } else if (timedOut) {
        return (
            <div className={styles.block}>
                <p className={styles.errorMessage}>
                    Page timed out.
                </p>
            </div>
        );
    }

    return null;
};

const CustomLoadable = (opts: any) => Loadable({ ...opts, loading: GlobalLoading, timeout: 10000 });

export default CustomLoadable;
