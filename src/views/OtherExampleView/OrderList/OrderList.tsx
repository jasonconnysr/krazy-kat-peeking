import * as React from 'react';
import OrdersContext, { Order } from '../../../contexts/OrdersContext';
import OrderListItem from '../OrderListItem';
import styles from './OrderList.scss';

export const OrderList : React.FC = () => {
    return (
        <OrdersContext.Consumer>
            {(orders: Array<Order>) => (
                <section className={styles.block}>
                    <h2 className={styles.heading}>Orders</h2>

                    <ul className={styles.list}>
                        {orders.map((order: Order, index) => {
                            return <OrderListItem key={index} order={order}/>;
                        })}
                    </ul>
                </section>
            )}
        </OrdersContext.Consumer>
    );
};
