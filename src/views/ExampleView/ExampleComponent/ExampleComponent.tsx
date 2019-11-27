import * as React from 'react';
import MembershipContext, { Membership } from '../../../contexts/MembershipContext';
import FormattedDate from '../../../components/FormattedDate';
import styles from './ExampleComponent.scss';

const ExampleComponent : React.FC = () => {
    return (
        <MembershipContext.Consumer>
            {(membership: Membership) => (
                <section className={styles.block}>
                    <h2 className={styles.heading}>Account Overview</h2>

                    <dl className={styles.list}>
                        <div className={styles.listItem}>
                            <dt>Membership type</dt>
                            <dd>{membership.displayName}</dd>
                        </div>

                        <div className={styles.listItem}>
                            <dt>Status</dt>
                            <dd>{membership.active ? 'active' : 'expired'}</dd>
                        </div>

                        <div className={styles.listItem}>
                            <dt>Member since</dt>
                            <dd>
                                <FormattedDate date={membership.memberSinceDate}/>
                            </dd>
                        </div>

                        <div className={styles.listItem}>
                            <dt>Membership expiration</dt>
                            <dd>
                                <FormattedDate date={membership.expirationDate}/>
                            </dd>
                        </div>
                    </dl>
                </section>
            )}
        </MembershipContext.Consumer>
    )
};

export default ExampleComponent;
