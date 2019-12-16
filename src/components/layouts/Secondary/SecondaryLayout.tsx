import * as React from 'react';
import ErrorBoundary from '../../ErrorBoundary';
import ErrorMessage from '../../ErrorMessage';
import Loading from '../../Loading';
import Footer from '../Footer';
import Header from '../Header';
import MainNavBar from '../MainNavBar';
import classnames from 'classnames';
import styles from './SecondaryLayout.scss'

interface Props {
    classname?: string;
    error: boolean,
    errorMessage: string | null,
    links?: Array<MainNavBarLink>,
    loaded: boolean;
}

const SecondaryLayout : React.FC<Props> = props => {
    const { children, classname, error, errorMessage, links, loaded } = props;
    return (
        <ErrorBoundary>
            <Header>
                {(links && links.length > 0) && <MainNavBar links={links}/>}
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
