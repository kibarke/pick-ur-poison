//  Stolen code from 21-MERN => 01-Activities => Solved => client => src => components => thoughtform

import { useMutation, useQuery } from '@apollo/client';

import { ADD_CART } from '../../utils/mutation';

import { QUERY_ALL_COCKTAILS, QUERY_ALL_MOCKTAILS } from '../../utils/queries';

const DrinkList = (props) => {

    const { data: cocktailData } = useQuery(QUERY_ALL_COCKTAILS)

    const { data: mocktailData } = useQuery(QUERY_ALL_MOCKTAILS)

    console.log(cocktailData, mocktailData);

  const [addCart] = useMutation(ADD_CART, {

  });
let drinks = []

 if (props.type === "cocktails") {
  drinks = cocktailData?.cocktails??[];
  
 } else if (props.type === "mocktails") {
  drinks = mocktailData?.mocktails??[];

 }

  const handleClick = async (event) => {
    event.preventDefault();

    try {
    await addCart({
        variables: {
          mocktail: event.target.dataset.id, 
          cocktail: event.target.dataset.id 
        } ,
      });

    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

const HAS_ITEMS = drinks.length >0 ? true : false
console.log(HAS_ITEMS, drinks);

 if (HAS_ITEMS) {
  return (
    <ul>
   {drinks.map(({_id, name, price }) => (
        <li key={_id}>
        {name} ({price})
          <button onClick={handleClick} data-id={_id}>
            Add To Cart
          </button>
        </li>
      ))}
    </ul>
  )
 } else {
  return (
    <p>There are no {props.type} yet</p>
  )
 }

};

export default DrinkList;
