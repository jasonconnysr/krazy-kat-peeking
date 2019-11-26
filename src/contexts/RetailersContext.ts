import * as React from 'react';

export type Retailer = {
    clickToPartnerSite: boolean,
    code: string,
    logoBW: string,
    logoFilename: string,
    retailerName: string,
    returnsTollFreeNumber: string,
    returnsPolicy: string,
    returnsUrl: string,
    url: string,
}

const defaultRetailers: Array<Retailer> = [];

const RetailersContext = React.createContext(defaultRetailers);

export default RetailersContext;
