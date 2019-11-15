import * as React from 'react';
import styles from './HomeView.scss';

class HomeView extends React.Component<Object, Object> {
    render() {
        return (
            <main className={styles.block}>
                <h1 className={styles.heading}>Krazy Kat Peeking</h1>
            </main>
        );
    }
}

export default HomeView;
