import { Button } from '@material-ui/core';
import React from 'react';
import SearchResult from '../components/SearchResult';
import './SearchPage.css';

const SearchPage = () => {
  return (
    <div className='searchPage'>
      <div className='search__info'>
        <p>37 stays . 12 farvardin to 21 farvardin . 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant='outlined'>Cancellation Flexibilty</Button>
        <Button variant='outlined'>Type of place</Button>
        <Button variant='outlined'>Price</Button>
        <Button variant='outlined'>Rooms and beds</Button>
        <Button variant='outlined'>More filters</Button>
      </div>
      <SearchResult
        img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9v9OavWpb0j-stXfsuAuVYwYMmGMp5K8VuQ&usqp=CAU'
        location='Kish Island'
        title='fantastic room in Kish'
        desc='4 bed . bathroom . free Wifi . beautiful view'
        star={4.85}
        price='$130 / night'
        total='$955  total'
      />{' '}
      <SearchResult
        img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx3HFwRWkgewwd9MyFd5RIp0bs0ZRNbMT7Tg&usqp=CAU'
        location='Kish Island'
        title='fantastic room in Kish'
        desc='4 bed . bathroom . free Wifi . beautiful view'
        star={4.85}
        price='$130 / night'
        total='$955  total'
      />
    </div>
  );
};

export default SearchPage;
