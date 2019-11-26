import * as React from 'react';
import { fetch } from '../../fetch';
import OrdersContext from '../../contexts/OrdersContext';
import { PrimaryLayout } from '../../components/layouts';
// import styles from './OtherExampleView.scss';

const OtherExampleView : React.FC = () => {
    const [exampleOrders, setExampleOrders] = React.useState({
        error: false,
        errorMessage: null,
        loaded: false,
        orders: []
    });

    React.useEffect(() => {
        const getMembership = async () => {
            try {
                setExampleOrders({
                    error: false,
                    errorMessage: null,
                    loaded: false,
                    orders: exampleOrders.orders
                });

                const response = await fetch('/json/mockOrders.json');

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

        getMembership();
    }, []);

    return (
        <OrdersContext.Provider value={exampleOrders.orders}>
            <PrimaryLayout
                error={exampleOrders.error}
                errorMessage={exampleOrders.errorMessage}
                loaded={exampleOrders.loaded}
            >
                <h1>Other Example View</h1>
            </PrimaryLayout>
        </OrdersContext.Provider>
    );
};

export default OtherExampleView;
