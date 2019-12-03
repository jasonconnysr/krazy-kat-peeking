import * as React from 'react';
import { Fetcher } from '../../fetcher';
import OrdersContext, { defaultOrders } from '../../contexts/OrdersContext';
import { PrimaryLayout } from '../../components/layouts';
import OrderList from './OrderList';
import styles from './OtherExampleView.scss';

const OtherExampleView : React.FC = () => {
    const [exampleOrders, setExampleOrders] = React.useState({
        error: false,
        errorMessage: null,
        loaded: false,
        orders: defaultOrders
    });

    React.useEffect(() => {
        const getOrders = async () => {
            try {
                setExampleOrders({
                    error: false,
                    errorMessage: null,
                    loaded: false,
                    orders: exampleOrders.orders
                });

                const response = await Fetcher('http://localhost:8080/api/member/1234/orders');

                setExampleOrders({
                    error: false,
                    errorMessage: null,
                    loaded: true,
                    orders: response
                });
            }
            catch (error) {
                console.log('handle error', error.message);
                setExampleOrders({
                    error: true,
                    errorMessage: error.message,
                    loaded: true,
                    orders: exampleOrders.orders
                });
            }
        };

        getOrders();
    }, []);

    return (
        <OrdersContext.Provider value={exampleOrders.orders}>
            <PrimaryLayout
                error={exampleOrders.error}
                errorMessage={exampleOrders.errorMessage}
                loaded={exampleOrders.loaded}
            >
                <section className={styles.intro}>
                    <h1>Other Example View</h1>

                    <p>This view displays a list of orders from the Order context.</p>
                </section>

                <OrderList/>
            </PrimaryLayout>
        </OrdersContext.Provider>
    );
};

export default OtherExampleView;
