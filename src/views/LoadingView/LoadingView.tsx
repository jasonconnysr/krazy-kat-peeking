import * as React from 'react';
import { PrimaryLayout } from '../../components/layouts';
import styles from './LoadingView.scss';

const LoadingView : React.FC = () => {
    return (
        <PrimaryLayout
            classname={styles.block}
            error={false}
            errorMessage={''}
            loaded={false}
        >
            <h1 className={styles.heading}>Loading View</h1>

            <p>It just keeps loading&hellip;</p>
        </PrimaryLayout>
    );
};

export default LoadingView;
