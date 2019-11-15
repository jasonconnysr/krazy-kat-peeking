import * as React from 'react';
import * as Loadable from 'react-loadable';
import * as log from 'loglevel';

// custom Loading component specifically for react-loadable.
// If there is an error thrown from react-loadable, error prop
// is true and error is displayed. If more than 200ms have elapsed
// (default), then pastDelay prop is true and Spinner renders. This
// prevents flashing of spinner on fast page loads. Finally, if
// more than 10 seconds elapse, the timedOut prop is true and an
// error is displayed.
const Loading = (error: boolean, pastDelay: boolean, timedOut: boolean) => {
    if (error) {
        log.info('ReactLoadable has brief error state');
        return null;
    } else if (pastDelay) {
        return (
            <div>Loading...</div>
        );
    } else if (timedOut) {
        return (
            <div>Chunk took loo long to load</div>
        );
    }

    return null;
};

const CustomLoadable = (opts: any) => Loadable({ ...opts, loading: Loading, timeout: 10000 });

export default CustomLoadable;
