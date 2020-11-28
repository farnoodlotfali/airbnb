import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import './Banner.css';
import Search from '../components/Search';

const Banner = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className='banner'>
      <div className='grid'>
        <Button
          className='banner__search search__button'
          variant='outlined'
          onClick={() => {
            setShowSearch(!showSearch);
          }}
        >
          {showSearch ? 'Hide' : 'Search Dates'}
        </Button>
      </div>

      <div className='banner__info'>
        <div style={{ paddingTop: '70px' }}>
          <h1> Get out and enjoy your life</h1>

          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            molestias, <br />
            nemo mollitia vitae adad repudiandae est.
          </h5>
          <Button variant='outlined'> Expolre NearBy</Button>
        </div>
      </div>

      <div className='banner__search'>{showSearch && <Search />}</div>
    </div>
  );
};

export default Banner;
