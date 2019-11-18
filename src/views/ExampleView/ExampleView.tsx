import * as React from 'react';
import { PrimaryLayout } from '../../components/layouts';
import styles from './ExampleView.scss';

type Props = {};

type State = {};

class ExampleView extends React.Component<Props, State> {
    render() {
        return (
            <PrimaryLayout classname={styles.block}>
                <h1 className={styles.heading}>Krazy Kat Peeking</h1>
            </PrimaryLayout>
        );
    }
}

export default ExampleView;
