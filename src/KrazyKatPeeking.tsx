import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Route, Router} from 'react-router';
import Routes from './routing/Routes';
import CustomHistory from './routing/CustomHistory';
import Member from './types/Member';
import * as UserController from './controllers/MemberController';
import MemberContext, { defaultMember } from './contexts/MemberContext';
import './styles/styles.scss';

const rootElement = document.getElementById('krazy-kat-peeking');

type State = {
    user: Member
}

class KrazyKatPeeking extends React.Component<{}, State> {
    constructor(props: Object) {
        super(props);
        this.state = {
            user: defaultMember
        }
    };

    componentDidMount(): void {
        UserController.getMemberDetails()
            .then((response: Member) => {
                this.setState({
                    user: response
                });
            });
    }

    render() {
        return (
            <MemberContext.Provider value={this.state.user}>
                <Router history={CustomHistory}>
                    <Route path={'/'} component={Routes}/>
                </Router>
            </MemberContext.Provider>
        );
    }
}

ReactDOM.render(<KrazyKatPeeking/>, rootElement);

export default KrazyKatPeeking;
