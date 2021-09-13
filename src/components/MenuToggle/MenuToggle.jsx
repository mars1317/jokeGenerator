import React, {useContext, useState, useEffect, Fragment} from 'react';
import FavouriteJokes from '../FavouriteJokes/FavouriteJokes';
import {JokeContext} from '../../context/JokeContext/JokeContext';
import menuIcon from './assets/icons/menu.svg';
import closeIcon from './assets/icons/cancel.svg';
import classes from './MenuToggle.module.scss'

function MenuToggle() {  
  const [isOpen, setChecked] = useState(false);
  const toggleChecked = () => setChecked(value => !value);
  const handleResize = () => {
    if (window.innerWidth > 1024) {
      setChecked(false)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })
  

  const menuToggleCls = [
    classes.MenuToggle
  ]

  let DrawCls = [];
  let imgUrl = '';

  const closeToggleMenu = (event) => {
    setChecked(false);
  }

  if(isOpen) {
    menuToggleCls.push(classes.Opened)
    imgUrl = closeIcon;
    DrawCls.push(classes.Blackout);
  }

  else {
    menuToggleCls.push(classes.Closed)
    DrawCls.push(classes.BlackoutOff);
    imgUrl = menuIcon;
    DrawCls = [];
  }

  return (
    <Fragment>
      <div className={DrawCls.join('  ')} onClick={(event)=>closeToggleMenu(event)}></div>
      <div className={menuToggleCls.join('  ')}>
      <div className={classes.ToggleButton} onClick={toggleChecked}>
        <img alt='menu icon' src={imgUrl} className={classes.MenuIcon}></img>
        <p>Favourite</p>
      </div>
      <div className={classes.JokeContent}>
        <FavouriteJokes></FavouriteJokes>
      </div>
    </div>
    </Fragment>
  );
} 


export default MenuToggle;