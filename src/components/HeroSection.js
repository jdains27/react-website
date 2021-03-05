import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>Welcome to Iron Chess</h1>
      <p>What are you waiting for?</p>
      <small><br /></small>
        <Link to='/aboutchess'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        > About Chess </Button>
        </Link>
      </div>
  );
}

export default HeroSection;
