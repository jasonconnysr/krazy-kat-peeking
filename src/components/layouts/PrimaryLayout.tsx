import * as React from 'react';
import ErrorBoundary from '../ErrorBoundary';
import PrimaryFooter from './primaryFooter';
import PrimaryHeader from './primaryHeader';
import styles from './PrimaryLayout.scss'
import classnames from 'classnames';

type Props = {
    classname?: string;
};

const PrimaryLayout : React.FC<Props> = props => {
    const { children, classname } = props;
    return (
        <ErrorBoundary>
            <PrimaryHeader/>

            <main className={classnames(
                    styles.block,
                    {[`${classname}`]: classname}
                )}
            >
                {children}
            </main>

            <PrimaryFooter/>
        </ErrorBoundary>
    );
};

export default PrimaryLayout;
