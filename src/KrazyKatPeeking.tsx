import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Router } from 'react-router';
import Routes from './routing/Routes';
import CustomHistory from './routing/CustomHistory';
import { fetch } from './fetch';
import MemberContext, { defaultMember, Member } from './contexts/MemberContext';
import './styles/styles.scss';

const KrazyKatPeeking : React.FC = () => {
    const [data, setData] = React.useState({
        loaded: false,
        member: defaultMember
    });

    React.useEffect(() => {
        const getMembership = async () => {
            try {
                setData({
                    loaded: false,
                    member: data.member
                });

                const response: Member = await fetch('/json/mockMember.json');

                setData({
                    loaded: true,
                    member: response
                });
            }
            catch (error) {
                console.log('handle error',error);
                setData({
                    loaded: true,
                    member: data.member
                });
            }
        };

        getMembership();
    }, []);

    return (
        <MemberContext.Provider value={data.member}>
            <Router history={CustomHistory}>
                <Route path={'/'} component={Routes}/>
            </Router>
        </MemberContext.Provider>
    );
};

const rootElement = document.getElementById('krazy-kat-peeking');
ReactDOM.render(<KrazyKatPeeking/>, rootElement);

export default KrazyKatPeeking;
