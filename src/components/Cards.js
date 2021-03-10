import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Discover our newest sections</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-12.jpg'
              text='All the cool and fun boards, pieces, and ways to play.'
              label='Cool Chess'
              path='/coolchess'
            />
            <CardItem
              src='images/img-11.jpg'
              text='A list of features that will be added to Iron Chess'
              label='Updates'
              path='/updates'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
