import React, {useReducer} from 'react'
import axios from 'axios'
import JokeContext from './JokeContext.js'
import rootReducer from './JokeReducer.js'
import {getRandomInt} from '../../lib/lib.js'
import {
  GET_JOKE_CATEGORIES, 
  SET_JOKE, 
  SET_JOKE_TYPE, 
  INPUT_VALUE, 
  SET_CATEGORY, 
  REMOVE_CATEGORY,
  SET_CATEGORY_ERROR_MESSAGE,
  SET_SEARCH_ERROR_MESSAGE,
  SET_FAV_JOKE
} from '../types'

export const JokeState = ({children}) => {
  let initialState = {
    jokeCategories: [],
    favouriteJokes: [],
    jokeType: 'RandomOption',
    categoriesList: [],
    inputValue: '',
    jokeList: [],
    favouriteJokes:[],
    categoryErrorMessage: '',
    searchErrorMessage: ''
  }

  const CategoryOption = 'CategoryOption'
  const SearchOption = 'SearchOption'

  const [state, dispatch] = useReducer(rootReducer, initialState)

  const getJokeCategories = async name => {
    const response = await axios.get(`https://api.chucknorris.io/jokes/categories`)

    dispatch({
      type: GET_JOKE_CATEGORIES,
      payload: response.data
    })
  }
  

  const setJokeType = (type) => {
    dispatch({
      type: SET_JOKE_TYPE,
      payload: type
    })

    if(searchErrorMessage.length>0) {
      dispatch({
        type: SET_SEARCH_ERROR_MESSAGE,
        payload: ''
      })
    }

    if(categoryErrorMessage.length>0) {
      dispatch({
        type: SET_CATEGORY_ERROR_MESSAGE,
        payload: ''
      })
    }
 
  }

  const getJoke = async (liked=false) => {  
    let response = '';
    let payload = [];
      
    if (state.jokeType==CategoryOption) {

      if (state.categoriesList.length === 0) {
        dispatch({
          type:SET_CATEGORY_ERROR_MESSAGE,
          payload: 'You have to choose at least one category'
        })
      }

      else {
        const randomNumber = getRandomInt(0, categoriesList.length);
        let category = state.categoriesList[randomNumber];
        response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)

        payload = response.data;

        dispatch({
          type:SET_CATEGORY_ERROR_MESSAGE,
          payload: ''
        })
        payload.isLiked = false;

        dispatch({
          type: SET_JOKE,
          payload
        })
      }
    }

    else if (state.jokeType == SearchOption) {
      if(inputValue) {
        response = await axios.get(`https://api.chucknorris.io/jokes/search?query=${inputValue}`)

        const randomNumber = getRandomInt(0, response.data.result.length)
        payload = response.data.result[randomNumber];

        if(randomNumber == 0) {
          payload = []
        }      

        dispatch({
          type: SET_SEARCH_ERROR_MESSAGE,
          payload: ''
        })

        if(payload.value) {
          payload.isLiked = false;

          dispatch({
            type: SET_JOKE,
            payload
          })
        }

        else {
          dispatch({
            type: SET_SEARCH_ERROR_MESSAGE,
            payload: 'Try another word...'
          })
        }
      }

      else {
        dispatch({
          type: SET_SEARCH_ERROR_MESSAGE,
          payload: 'You have to write something...'
        })
      }
    }

    else {
      response = await axios.get(`https://api.chucknorris.io/jokes/random`)
      payload = response.data
      payload.isLiked = false;
      dispatch({
        type: SET_JOKE,
        payload
      })
    }
  }

  const setInputValue = (inputValue) => {
    console.log(inputValue)
    dispatch({
      type: INPUT_VALUE,
      payload: inputValue
    })
  }

  const setCategory = (categoriesList) => {
    dispatch({
      type: SET_CATEGORY,
      payload: categoriesList
    })
  }

  const getFavJokesFromLS = () => {
    let emptyArray = JSON.stringify([]);
    let favJokes = localStorage.getItem('favJokes');

    if(favJokes) {
      dispatch({
        type: SET_FAV_JOKE,
        payload: JSON.parse(favJokes)
      })
    }

    else {
      localStorage.setItem('favJokes', emptyArray)
    }
  }

  const setFavJoke = (favouriteJokes) => {
    localStorage.setItem('favJokes', JSON.stringify(favouriteJokes))

    dispatch({
      type: SET_FAV_JOKE,
      payload: favouriteJokes
    })
  }

  let {jokeCategories, jokeList, favouriteJokes, jokeType, inputValue, categoriesList, categoryErrorMessage, searchErrorMessage} = state;

  return (
    <JokeContext.Provider value = {{
     getJokeCategories, getJoke, setJokeType, setInputValue, setCategory,
     setFavJoke, getFavJokesFromLS,
     jokeCategories, jokeList, favouriteJokes, jokeType, inputValue, categoriesList,
     categoryErrorMessage, searchErrorMessage, favouriteJokes
    }}>
      {children}
    </JokeContext.Provider>
  )
}