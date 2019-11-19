import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Route, Router} from 'react-router';
import Routes from './routing/Routes';
import CustomHistory from './routing/CustomHistory';
import User from './types/User';
import * as UserController from './controllers/UserController';
import UserContext, { defaultUser } from './contexts/UserContext';
import './styles/styles.scss';

const rootElement = document.getElementById('krazy-kat-peeking');

type State = {
    user: User
}

class KrazyKatPeeking extends React.Component<{}, State> {
    constructor(props: Object) {
        super(props);
        this.state = {
            user: defaultUser
        }
    };

    componentDidMount(): void {
        UserController.getUser()
            .then((response: User) => {
                this.setState({
                    user: response
                });
            });
    }

    render() {
        return (
            <UserContext.Provider value={this.state.user}>
                <Router history={CustomHistory}>
                    <Route path={'/'} component={Routes}/>
                </Router>
            </UserContext.Provider>
        );
    }
}

ReactDOM.render(<KrazyKatPeeking/>, rootElement);

export default KrazyKatPeeking;
