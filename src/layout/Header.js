import React from 'react';
import logo from '../assets/photo.png';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandedMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <img className='header__icon' src={logo} alt='logo' />
      </Link>
      <div className='header__center'>
        <input type='text' name='' placeholder='Search ...' />
        <SearchIcon />
      </div>

      <div className='header__right'>
        <p className='header_text'>Become a host</p>
        <LanguageIcon />
        <ExpandedMoreIcon />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
