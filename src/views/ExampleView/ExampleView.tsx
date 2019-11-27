import * as React from 'react';
import { Fetcher } from '../../fetcher';
import MembershipContext, { defaultMembership, Membership } from '../../contexts/MembershipContext';
import { PrimaryLayout } from '../../components/layouts';
import AnotherComponent from './AnotherComponent';
import ExampleComponent from './ExampleComponent';
import { Button } from '../../components/Button';
import styles from './ExampleView.scss';

const ExampleView : React.FC = () => {
    const [exampleData, setExampleData] = React.useState({
        loaded: false,
        membership: defaultMembership
    });

    const handleCancelMembershipClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log('cancel membership clicked');
    };

    React.useEffect(() => {
        const getMembership = async () => {
            try {
                setExampleData({
                    loaded: false,
                    membership: exampleData.membership
                });

                const response: Membership = await Fetcher('http://localhost:8080/api/member/1234/membership');

                setExampleData({
                    loaded: true,
                    membership: response
                });
            }
            catch (error) {
                console.log('handle error',error);
                setExampleData({
                    loaded: true,
                    membership: exampleData.membership
                });
            }
        };

        getMembership();
    }, []);

    return (
        <MembershipContext.Provider value={exampleData.membership}>
            <PrimaryLayout
                classname={styles.block}
                error={false}
                errorMessage={''}
                loaded={exampleData.loaded}
            >
                <h1 className={styles.heading}>Example View</h1>

                <p>This view includes data from two contexts: Member and Membership</p>

                <AnotherComponent/>

                <ExampleComponent/>

                <Button handleClick={handleCancelMembershipClick} text={'Cancel Membership'}/>
            </PrimaryLayout>
        </MembershipContext.Provider>
    );
};

export default ExampleView;
