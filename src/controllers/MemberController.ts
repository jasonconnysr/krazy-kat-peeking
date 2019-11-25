import { fetch } from '../fetch';
import { Member } from '../contexts/MemberContext';
import * as log from 'loglevel';

const getMemberDetails = async (): Promise<Member | null> => {
    try {
        return await fetch('/json/mockMember.json')
    } catch (error) {
        log.info(error);
        return null;
    }
};

export { getMemberDetails };
