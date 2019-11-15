import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Route, Router} from 'react-router';
import Routes from './routing/Routes';
import CustomHistory from './routing/CustomHistory';
import './styles/styles.scss';

const rootElement = document.getElementById('krazy-kat-peeking');

class KrazyKatPeeking extends React.Component<Object, Object> {
    render() {
        return (
            <Router history={CustomHistory}>
                <Route path={'/'} component={Routes}/>
            </Router>
        );
    }
}

ReactDOM.render(<KrazyKatPeeking/>, rootElement);

export default KrazyKatPeeking;
