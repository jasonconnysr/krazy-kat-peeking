import * as React from 'react';
import { PrimaryLayout } from '../../components/layouts';
import styles from './ErrorView.scss';

const ErrorView : React.FC = () => {
    return (
        <PrimaryLayout
            classname={styles.block}
            error={true}
            errorMessage={'Sheeeeeeeit!!!'}
            loaded={true}
        >
            <h1 className={styles.heading}>Error View</h1>

            <p>Page errors can accept a custom error message.</p>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/l1dnqKGuezo" frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
        </PrimaryLayout>
    );
};

export default ErrorView;
