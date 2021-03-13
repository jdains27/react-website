import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import { Button } from '../Button';

function PlayerChess() {
  return <div className='playerchess'>
    <small><h3> 2 Player Chess </h3></small>
    <br />
    <a href='http://localhost:3002/' >
    <Button
      className='btns'
      buttonStyle='btn--outline'
      buttonSize='btn--large'
    > Play </Button> 
    </a>
    </div>;
}

export default PlayerChess;

// React-Chess game