import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Router } from 'react-router';
import GlobalStyles from './components/GlobalStyles';
import Routes from './routing/Routes';
import CustomHistory from './routing/CustomHistory';
import { Fetcher } from './fetcher';
import MemberContext, { defaultMember, Member } from './contexts/MemberContext';

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

                const response: Member = await Fetcher('http://localhost:8080/api/member/1234');

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
            <GlobalStyles>
                <Router history={CustomHistory}>
                    <Route path={'/'} component={Routes}/>
                </Router>
            </GlobalStyles>
        </MemberContext.Provider>
    );
};

const rootElement = document.getElementById('krazy-kat-peeking');
ReactDOM.render(<KrazyKatPeeking/>, rootElement);

export default KrazyKatPeeking;
