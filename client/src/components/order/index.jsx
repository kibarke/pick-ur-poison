//  Stolen code from 21-MERN => 01-Activities => Solved => client => src => components => thoughtform


import { useMutation, useQuery } from '@apollo/client';

import { ADD_CART } from '../../utils/mutation';
import { QUERY_ALL_COCKTAILS } from '../../utils/queries';

const OrderForm = () => {
  
  const{ data: cocktailData } = useQuery(QUERY_ALL_COCKTAILS)


  const [addCart] = useMutation(ADD_CART, {

  });

  const cocktails = cocktailData?.cocktails??[];

  const handleClick = async (event) => {
    event.preventDefault();

    try {
    await addCart({
        variables: { mocktail: event.target.dataset.id, cocktail: event.target.dataset.id } ,
      });

    } catch (err) {
      console.error(err);
    }
  };



  return (
    <ul>
   {cocktails.map(({_id, cocktailName }) => (
        <li key={_id}>
          {cocktailName}
          <button onClick={handleClick} data-id={_id}>
            Add To Cart
          </button>
        </li>
      ))}
    </ul>
  );
};

export default OrderForm;
