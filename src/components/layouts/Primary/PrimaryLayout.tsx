import * as React from 'react';
import ErrorBoundary from '../../ErrorBoundary';
import ErrorMessage from '../../ErrorMessage';
import Loading from '../../Loading';
import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';
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
            <a
                href="#main-content"
                className={styles.skipNavigation}
            >
                Skip to main content
            </a>

            <Header>
                <Navigation/>
            </Header>

            <main id={'main-content'} className={classnames(
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

            <Footer/>
        </ErrorBoundary>
    );
};

export default PrimaryLayout;
