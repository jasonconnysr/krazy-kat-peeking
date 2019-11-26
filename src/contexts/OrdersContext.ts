import * as React from 'react';
import { Retailer } from './RetailersContext';

export type Order = {
    createdDate: string,
    expressCheckout: boolean
    lastModifiedDate: string,
    memberId: string,
    merchantOrderId: string,
    orderDate: string,
    orderEmail: string,
    orderId: string,
    orderOrigin: "PIK" | "DISTRICT" | null,
    orderStatus: "Delivered" | "Ordered" | "Partially Delivered" | "Processing" | null,
    orderSubtotal: string | null,
    orderTotal: string,
    retailer: Retailer
};

export const defaultOrders: Array<Order> = [];

const OrdersContext = React.createContext(defaultOrders);

export default OrdersContext;
