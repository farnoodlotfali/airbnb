import { FavoriteBorder, Star } from '@material-ui/icons';
import React from 'react';
import './SearchResult.css';

const SearchResult = ({ img, location, title, desc, star, price, total }) => {
  return (
    <div className='searchResult'>
      <img src={img} alt='' />
      <FavoriteBorder className='searchResult__heart' />

      <div className='searchResult__info'>
        <div className='searchResult__infoTop'>
          <p>{location}</p>
          <h3>{title}</h3>
          <p>_____</p>
          <p>{desc}</p>
        </div>

        <div className='searchResult__infoBottom'>
          <div className='searchResult__stars'>
            <Star className='searchResult__star' />
            <p>
              <strong> {star}</strong>
            </p>
          </div>
          <div className='searchResult__price'>
            <h2>
              <p>{price}</p>
            </h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
