import * as React from 'react';
import MemberContext, { Member } from '../../../contexts/MemberContext';
import styles from './AnotherComponent.scss';

const AnotherComponent : React.FC = () => {
    return (
        <MemberContext.Consumer>
            {(member: Member) => (
                <section className={styles.block}>
                    <h2 className={styles.heading}>Personal Info</h2>

                    <h3>{member.firstName} {member.lastName}</h3>

                    <p>{member.email}</p>
                </section>
            )}
        </MemberContext.Consumer>
    );
};

export default AnotherComponent;
