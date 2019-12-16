import * as React from 'react';
import ErrorBoundary from '../../ErrorBoundary';
import ErrorMessage from '../../ErrorMessage';
import Loading from '../../Loading';
import Footer from '../Footer';
import { FatFooter } from './FatFooter/FatFooter';
import Header from '../Header';
import MainNavBar from '../MainNavBar';
import styles from './PrimaryLayout.scss'
import classnames from 'classnames';

interface IPrimaryLayoutProps {
    classes?: string;
    error: boolean,
    errorMessage: string | null,
    links?: Array<MainNavBarLink>,
    loaded: boolean;
}

const PrimaryLayout : React.FC<IPrimaryLayoutProps> = props => {
    const { children, classes, error, errorMessage, links, loaded } = props;
    return (
        <ErrorBoundary>
            <a
                href="#main-content"
                className={styles.skipNavigation}
            >
                Skip to main content
            </a>

            <Header>
                {(links && links.length > 0) && <MainNavBar links={links}/>}
            </Header>

            <main id={'main-content'} className={classnames(
                styles.main,
                {[`${classes}`]: classes}
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
