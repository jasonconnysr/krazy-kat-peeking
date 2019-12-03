import * as React from 'react';
import { Fetcher } from '../../fetcher';
import { PrimaryLayout } from '../../components/layouts';
import styles from './ErrorView.scss';

const ErrorView : React.FC = () => {
    const [someState, setSomeState] = React.useState({
        error: false,
        errorMessage: '',
        loaded: false,
        someStuff: []
    });

    React.useEffect(() => {
        const getSomeState = async () => {
            try {
                const response: any = await Fetcher('http://localhost:8080/api/bogus');

                setSomeState({
                    error: false,
                    errorMessage: '',
                    loaded: true,
                    someStuff: response
                })
            }
            catch (error) {
                setSomeState({
                    error: true,
                    errorMessage: `Sheeeeeeeit!! ${error.message}`,
                    loaded: true,
                    someStuff: someState.someStuff
                });
            }
        };

        getSomeState();
    }, []);

    return (
        <PrimaryLayout
            error={true}
            errorMessage={someState.errorMessage}
            loaded={true}
        >
            <section className={styles.intro}>
                <h1>Error View</h1>

                <p>Page errors can accept a custom error message.</p>
            </section>

            <section className={styles.videoContainer}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/l1dnqKGuezo" frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
            </section>
        </PrimaryLayout>
    );
};

export default ErrorView;
