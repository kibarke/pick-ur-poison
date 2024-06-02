//  Stolen code from 21-MERN => 01-Activities => Solved => client => src => components => header

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        {/* <Link className="text-light" to="/"> */}
          <h1 className="m-0">Pick Your Poison</h1>
        {/* </Link> */}
        <p className="m-0">The toxic relationship you need!</p> 
        {/* IDK what to put there, just a brand motto */}
      </div>
    </header>
  );
};

export default Header;
