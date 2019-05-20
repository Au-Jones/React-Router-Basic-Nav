import React from 'react';
import {Link} from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <Link to="/" className='nav'>Home</Link>
        </div>
        <div>
          <Link to="/about" className='nav'>About</Link>
        </div>
        <div>
          <Link to="/contact"className='nav'>Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
