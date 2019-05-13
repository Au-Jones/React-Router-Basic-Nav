import React from 'react';
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <Link to='/' className='nav-bar'>Home</Link>
        </div>
        <div>
          <Link to='/about' className='nav-bar'>About</Link>
        </div>
        < div>
          <Link to='/contacts' className='nav-bar'>Contacts</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
