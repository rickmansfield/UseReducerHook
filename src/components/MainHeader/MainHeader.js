import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <div className='columns'>
        <h1>Your Company</h1>
        <h3>Triple Crown Products Inc</h3>
      </div>
      <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
    </header>
  );
};

export default MainHeader;
