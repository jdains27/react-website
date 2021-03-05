import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import { Button } from '../Button';


function Learn() {
  return <div className='learn'>
    
    <Link to='/myteaching'>
    <Button
      className='btns'
      buttonStyle='btn--outline'
      buttonSize='btn--large'
    > My Teaching </Button> 
    </Link>

    <Link to='/traditionalteaching'>
    <Button
      className='btns'
      buttonStyle='btn--outline'
      buttonSize='btn--large'
    > Traditional Teaching </Button>
    </Link>

    <Link to='/coolchess'>
    <Button
      className='btns'
      buttonStyle='btn--outline'
      buttonSize='btn--large'
    > Cool Chess </Button>
    </Link>
    </div>;
}

export default Learn;

