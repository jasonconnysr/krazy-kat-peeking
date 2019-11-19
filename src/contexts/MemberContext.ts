import * as React from 'react';
import Member from '../types/Member';

export const defaultMember: Member = {
    firstName: '',
    lastName: '',
    memberId: ''
};

const MemberContext = React.createContext(defaultMember);

export default MemberContext;
