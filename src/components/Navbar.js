import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  // eslint-disable-next-line
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'> Iron Chess <i class="fas fa-chess-rook"></i> </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'> <Link to='/' className='nav-links'> Home </Link> </li>
            <li className='nav-item'> <Link to='/playerchess' className='nav-links'> 2 Player Chess </Link> </li>
            <li className='nav-item'> <Link to='/learn' className='nav-links'> Learn </Link> </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
