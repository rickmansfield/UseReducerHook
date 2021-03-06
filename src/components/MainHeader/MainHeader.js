import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <div className='columns'>
        <h1>Your Company</h1>
        <div>
          <h4>Triple Crown Products Inc</h4>
          </div>
        </div>
      <Navigation onLogout={props.onLogout} />
    </header>
  );
};

export default MainHeader;
