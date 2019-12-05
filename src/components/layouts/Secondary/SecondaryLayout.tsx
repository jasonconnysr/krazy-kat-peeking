import * as React from 'react';
import ErrorBoundary from '../../ErrorBoundary';
import ErrorMessage from '../../ErrorMessage';
import Loading from '../../Loading';
import Footer from '../Footer';
import Header from '../Header';
import MainNavigation from '../MainNavigation';
import classnames from 'classnames';
import styles from './SecondaryLayout.scss'

interface Props {
    classname?: string;
    error: boolean,
    errorMessage: string | null,
    loaded: boolean;
}

const SecondaryLayout : React.FC<Props> = props => {
    const { children, classname, error, errorMessage, loaded } = props;
    return (
        <ErrorBoundary>
            <Header>
                <MainNavigation/>
            </Header>

            <main id={'main-content'} className={classnames(
                    styles.main,
                    {[`${classname}`]: classname}
                )}
            >
                {error && (
                    <ErrorMessage errorMessageText={errorMessage} />
                )}

                <Loading loaded={loaded}>
                    {children}
                </Loading>
            </main>

            <Footer/>
        </ErrorBoundary>
    );
};

export default SecondaryLayout;