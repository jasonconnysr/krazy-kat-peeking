import * as React from 'react';
import { Order } from '../../../contexts/OrdersContext';
import { ButtonLink } from '../../../components/Button';
import Date from '../../../components/Date';
import styles from './OrderListItem.scss';

interface Props {
    order: Order
}

export const OrderListItem : React.FC<Props> = props => {
    const { order } = props;
    const { retailer } = order;

    const handleViewOrderDetails = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        console.log('view order details');
    };

    return (
        <li className={styles.block}>
            <h3 className={styles.retailerName}>{retailer.retailerName}</h3>

            <dl className={styles.orderInfo}>
                <dt>Ordered on:</dt>
                <dd>
                    <Date date={order.orderDate}/>
                </dd>

                <dt>Order number:</dt>
                <dd>{order.orderId}</dd>
            </dl>

            <div className={styles.orderStatus}>
                {order.orderStatus}
            </div>

            <div className={styles.orderActions}>
                <h4 className={styles.orderTotal}>
                    total: ${order.orderTotal}
                </h4>

                <ButtonLink
                    handleClick={handleViewOrderDetails}
                    href={'#'}
                    text={'View Order Details'}
                />
            </div>
        </li>
    );
};
