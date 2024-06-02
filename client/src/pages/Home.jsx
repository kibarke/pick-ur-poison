import { useQuery } from '@apollo/client';

import DrinkList from '../components/DrinkList';
import OrderForm from '../components/menu'; 

import { QUERY_USER } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_USER);
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
            <>
            <DrinkList type= "cocktails" />
            
            <DrinkList type= "mocktails" />

            </>

          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
