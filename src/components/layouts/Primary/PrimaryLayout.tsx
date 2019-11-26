import * as React from 'react';
import ErrorBoundary from '../../ErrorBoundary';
import ErrorMessage from '../../ErrorMessage';
import Loading from '../../Loading';
import PrimaryFooter from '../primaryFooter';
import PrimaryHeader from '../primaryHeader';
import PrimaryNavigation from '../primaryNavigation';
import styles from './PrimaryLayout.scss'
import classnames from 'classnames';

interface Props {
    classname?: string;
    error: boolean,
    errorMessage: string | null,
    loaded: boolean;
}

const PrimaryLayout : React.FC<Props> = props => {
    const { children, classname, error, errorMessage, loaded } = props;
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

                {error && (
                    <ErrorMessage errorMessageText={errorMessage} />
                )}
            </main>

            <PrimaryFooter/>
        </ErrorBoundary>
    );
};

export default PrimaryLayout;
