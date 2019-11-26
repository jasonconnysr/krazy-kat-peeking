import * as React from 'react';

export type Order = {
    createdDate: string,
    expressCheckout: boolean
    lastModifiedDate: string,
    memberId: string,
    membershipTermId: string,
    merchantOrderId: string,
    orderDate: string,
    orderEmail: string,
    orderId: string,
    orderOrigin: "SHOPRUNNER" | "DISTRICT" | null,
    orderStatus: "Delivered" | "Ordered" | "Partially Delivered" | "Processing" | null,
    orderStatusId: number,
    orderSubtotal: string,
    orderTotal: string
};

const OrdersContext = React.createContext([]);

export default OrdersContext;
