import React, { useState } from 'react';
import './Search.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import PeopleIcon from '@material-ui/icons/People';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const Search = () => {
  const history = useHistory();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  return (
    <div className='search'>
      <DateRange ranges={[selectionRange]} onChange={handleSelect} />

      <div className='search__middle'>
        <h4>Number of guests:</h4>

        <input min={0} defaultValue={2} type='number' />

        <PeopleIcon className='icon' />
      </div>

      <Button
        onClick={() => {
          history.push('/search');
        }}
        className='btn'
      >
        {' '}
        Search Airbnb
      </Button>
    </div>
  );
};

export default Search;
