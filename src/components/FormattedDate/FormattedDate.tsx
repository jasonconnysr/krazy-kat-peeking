import * as React from 'react';
import * as moment from 'moment';

interface Props {
    date: string
}

/* Enforce consistent date format */
export const FormattedDate : React.FC<Props> = props => {
    const { date } = props;

    return (
        <>
            {moment(date).format('LL')}
        </>
    );
};
