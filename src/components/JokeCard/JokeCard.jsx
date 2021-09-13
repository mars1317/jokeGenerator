import React, {useContext} from 'react';
import {JokeContext} from '../../context/JokeContext/JokeContext';
import {diffBetweenDays} from '../../lib/lib.js'
import classes from './JokeCard.module.scss';
import "animate.css"

function JokeCard(props) {
  const {favouriteJokes, jokeList, setFavJoke} = useContext(JokeContext);
  const likeBtnCls = [classes.LikeButton];
  const jokeCardCls = [classes.JokeCard, 'animate__animated animate__zoomIn']

  if (props.joke.isLiked) {
    likeBtnCls.push(classes.Liked)
  }

  if(props.JokeCardType==='favJoke') {
    jokeCardCls.push(classes.FavJoke)
  }

  else if (props.JokeCardType === 'jokeList') {
    jokeCardCls.push(classes.JokeList)
  }

  const LikeJoke = (e) => { 
    let jokeId = e.target.getAttribute('data-id');

    let likedJoke = jokeList.find((joke)=> {
      if(joke.id === jokeId) {
        joke.isLiked = joke.isLiked == false ? true : false;

        return joke;
      }
    });

    if ( !(favouriteJokes.some(favJoke => favJoke.id === jokeId))) {
      favouriteJokes.push(likedJoke);
    }

    else {
      let index = favouriteJokes.findIndex(favJoke => favJoke.id ===jokeId);
      favouriteJokes.splice(index, 1);
    }
    
    setFavJoke(favouriteJokes);
  }

  return (
    <div className={jokeCardCls.join(' ')}>
      <div className={classes.MessageIcon}></div>
      <div className={classes.Container}>
        <div className={classes.Header}>
          <p>
            <span className={classes.Id}>Id: </span>
            <span className={classes.IdNumber}>{props.joke.id}</span>
          </p>
        <button className={likeBtnCls.join('  ')} onClick={LikeJoke} data-id={props.joke.id}></button>
        </div>
        <p className={classes.Content}> { props.joke ? props.joke.value : <span>error</span> } </p>
        <section className={classes.Footer}>
        <span className={classes.Time}>Last update: {diffBetweenDays(props.joke.updated_at)} hours ago</span>
        {props.joke.categories[0] ? <p className={classes.CategoryType}> {props.joke.categories[0]} </p> : ''}
        </section>
      </div>
  </div>
  );
}

export default JokeCard;