import * as React from 'react';

export type Member = {
    email: string,
    firstName: string,
    lastName: string,
    memberId: string
};

export const defaultMember: Member = {
    email: '',
    firstName: '',
    lastName: '',
    memberId: ''
};

const MemberContext = React.createContext(defaultMember);

export default MemberContext;
