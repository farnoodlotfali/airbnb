import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import './Banner.css';
import Search from '../components/Search';

const Banner = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className='banner'>
      <div className='banner__search'>
        {showSearch && <Search />}

        <Button
          className='search__button'
          variant='outlined'
          onClick={() => {
            setShowSearch(!showSearch);
          }}
        >
          Search Dates
        </Button>
      </div>
      <div className='banner__info'>
        <h1> Get out and enjoy your life</h1>

        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          molestias, nemo mollitia vitae repudiandae est.
        </h5>
        <Button variant='outlined'> Expolre NearBy</Button>
      </div>
    </div>
  );
};

export default Banner;
