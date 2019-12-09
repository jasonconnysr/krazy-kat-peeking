import * as React from 'react';
import ErrorBoundary from '../../ErrorBoundary';
import ErrorMessage from '../../ErrorMessage';
import Loading from '../../Loading';
import Footer from '../Footer';
import { FatFooter } from './FatFooter/FatFooter';
import Header from '../Header';
import MainNavigation from '../MainNavigation';
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

            <Footer>
                <FatFooter/>
            </Footer>
        </ErrorBoundary>
    );
};

export default PrimaryLayout;
