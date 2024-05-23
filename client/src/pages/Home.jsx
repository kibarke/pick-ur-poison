import { useQuery } from '@apollo/client';

import OrderList from '../components/order';
import OrderForm from '../components/menu'; 

import { CUSTOMER_ORDERS } from '../utils/orders';

const Home = () => {
  const { loading, data } = useQuery(CUSTOMER_ORDERS);
  const orders = data?.orders || [];


//   Will adapt this for menu not 'thoughts'
  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
        <OrderForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <OrderList 
                orders={orders}
                title="Pick Your Poison..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
