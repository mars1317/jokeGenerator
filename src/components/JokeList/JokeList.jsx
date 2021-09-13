import React, {useContext} from 'react'
import {JokeContext} from '../../context/JokeContext/JokeContext';
import JokeCard from '../JokeCard/JokeCard'

function JokeList() {
  const {jokeList} = useContext(JokeContext)
  let testArray = [1,2,3];
  return (
    <React.Fragment>
      <div>
        {jokeList.map( (joke) => (
          <JokeCard JokeCardType={'jokeList'} joke = {joke} key={Math.random + joke.id}></JokeCard>
        ))}
      </div>
    </React.Fragment>
  )
}

export default JokeList;