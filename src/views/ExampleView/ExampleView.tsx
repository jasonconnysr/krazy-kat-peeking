import * as React from 'react';
import { PrimaryLayout } from '../../components/layouts';
import * as MembershipController from '../../controllers/MembershipController';
import MembershipContext, { defaultMembership, Membership } from '../../contexts/MembershipContext';
import ExampleComponent from './ExampleComponent';
import { Button } from '../../components/Button';
import styles from './ExampleView.scss';

type State = {
    loaded: boolean,
    membership: Membership
};

class ExampleView extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            loaded: false,
            membership: defaultMembership
        }
    };

    componentDidMount(): void {
        MembershipController.getMembershipDetails()
            .then((response: Membership) => {
                this.setState({
                    loaded: true,
                    membership: response
                });
            })
    }

    handleCancelMembershipClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log('cancel membership clicked');
    };

    render(): React.ReactNode {
        const { loaded, membership } = this.state;

        return (
            <MembershipContext.Provider value={membership}>
                <PrimaryLayout
                    classname={styles.block}
                    loaded={loaded}
                >
                    <h1 className={styles.heading}>Example View</h1>

                    <ExampleComponent/>

                    <Button handleClick={this.handleCancelMembershipClick} text={'Cancel Membership'}/>
                </PrimaryLayout>
            </MembershipContext.Provider>
        );
    }
}

export default ExampleView;
