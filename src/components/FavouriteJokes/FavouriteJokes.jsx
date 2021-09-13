import React, {useContext, useState, useEffect} from 'react';
import JokeCard from '../JokeCard/JokeCard'
import {JokeContext} from '../../context/JokeContext/JokeContext';
import classes from './FavouriteJokes.module.scss';


function FavouriteJokes() {
  const {favouriteJokes, getFavJokesFromLS} =  useContext(JokeContext);

  useEffect( ()=> {
    getFavJokesFromLS()
  }, [])

  let favContent = favouriteJokes.length > 0 ? 
    favouriteJokes.map( (favJoke) =>
    <JokeCard JokeCardType={'favJoke'} joke={favJoke} key={Math.random + favJoke.id}></JokeCard>) :
    <span className={classes.Exception}>You havent any fav jokes yet</span>

  return (
    <div className={classes.FavouriteJokes}>
        <p className={classes.Title}>Favourite</p>
        {favContent}
    </div>
  );
}

export default FavouriteJokes;