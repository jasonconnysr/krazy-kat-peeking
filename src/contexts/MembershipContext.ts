import * as React from 'react';

/*
* Object copied from Frodo's response to `/api/member/{memberId}/membership`. Looks like some redundant properties.
* */
export type Membership = {
    active: boolean,
    amex?: boolean,
    createdDate: string,
    displayName: string,
    expirationDate: string
    isAmex: boolean,
    isPaid: boolean,
    memberSinceDate: string,
    nextRenewalDate: string
    paid?: boolean
}

export const defaultMembership: Membership = {
    active: false,
    createdDate: '',
    displayName: '',
    expirationDate: '',
    isAmex: false,
    isPaid: false,
    memberSinceDate: '',
    nextRenewalDate: ''

};

const MembershipContext = React.createContext(defaultMembership);

export default MembershipContext;
