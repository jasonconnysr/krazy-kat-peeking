import * as React from 'react';

/*
* Object copied from Frodo's response to `/api/member/{memberId}/membership`. Looks like some redundant properties.
* */
export type Membership = {
    active: boolean,
    amex?: boolean,
    createFmtDt: string,
    displayName: string,
    expirationFmtDt: string
    isAmex: boolean,
    isPaid: boolean,
    memberSinceFmtDt: string,
    nextRenewalFmtDt: string
    paid?: boolean
}

export const defaultMembership: Membership = {
    active: false,
    createFmtDt: '',
    displayName: '',
    expirationFmtDt: '',
    isAmex: false,
    isPaid: false,
    memberSinceFmtDt: '',
    nextRenewalFmtDt: ''

};

const MembershipContext = React.createContext(defaultMembership);

export default MembershipContext;
