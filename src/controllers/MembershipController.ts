import { fetch } from '../fetch';
import * as log from 'loglevel';
import { Membership } from '../contexts/MembershipContext';

const getMembershipDetails = async (): Promise<Membership | null> => {
    try {
        return await fetch('/json/mockMembership.json')
    } catch (error) {
        log.info(error);
        return null;
    }
};

export { getMembershipDetails };
