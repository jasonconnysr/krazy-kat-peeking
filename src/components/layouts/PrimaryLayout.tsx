import * as React from 'react';
import ErrorBoundary from '../ErrorBoundary';
import Loading from './loading';
import PrimaryFooter from './primaryFooter';
import PrimaryHeader from './primaryHeader';
import PrimaryNavigation from './primaryNavigation';
import styles from './PrimaryLayout.scss'
import classnames from 'classnames';

interface Props {
    classname?: string;
    loaded: boolean;
}

const PrimaryLayout : React.FC<Props> = props => {
    const { children, classname, loaded } = props;
    return (
        <ErrorBoundary>
            <PrimaryHeader>
                <PrimaryNavigation/>
            </PrimaryHeader>

            <main className={classnames(
                    styles.main,
                    {[`${classname}`]: classname}
                )}
            >
                <Loading loaded={loaded}>
                    {children}
                </Loading>
            </main>

            <PrimaryFooter/>
        </ErrorBoundary>
    );
};

export default PrimaryLayout;
