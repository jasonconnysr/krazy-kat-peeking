import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Route, Router} from 'react-router';
import Routes from './routing/Routes';
import CustomHistory from './routing/CustomHistory';
import * as MemberController from './controllers/MemberController';
import MemberContext, { defaultMember, Member } from './contexts/MemberContext';
import './styles/styles.scss';

const rootElement = document.getElementById('krazy-kat-peeking');

type State = {
    member: Member
}

class KrazyKatPeeking extends React.Component<{}, State> {
    constructor(props: Object) {
        super(props);
        this.state = {
            member: defaultMember
        }
    };

    /* componentDidMount() seems weird here */
    componentDidMount(): void {
        MemberController.getMemberDetails()
            .then((response: Member) => {
                this.setState({
                    member: response
                });
            });
    }

    render(): React.ReactNode {
        const { member } = this.state;

        return (
            <MemberContext.Provider value={member}>
                <Router history={CustomHistory}>
                    <Route path={'/'} component={Routes}/>
                </Router>
            </MemberContext.Provider>
        );
    }
}

ReactDOM.render(<KrazyKatPeeking/>, rootElement);

export default KrazyKatPeeking;
