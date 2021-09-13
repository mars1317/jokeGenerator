import {
  GET_JOKE_CATEGORIES, 
  SET_TEST_VALUE, 
  SET_JOKE, 
  SET_JOKE_TYPE, 
  INPUT_VALUE, 
  SET_CATEGORY, 
  REMOVE_CATEGORY,
  SET_CATEGORY_ERROR_MESSAGE,
  SET_SEARCH_ERROR_MESSAGE,
  SET_FAV_JOKE
} from '../types'

const handlers = {
  [GET_JOKE_CATEGORIES]: (state, {payload}) => ({...state, jokeCategories: payload}),
  [SET_TEST_VALUE]: (state, name) => ({...state, test_value: name}),
  [SET_JOKE]: (state, {payload}) => ({...state, jokeList: [payload, ...state.jokeList]}),
  [SET_JOKE_TYPE]: (state, {payload}) => ({...state, jokeType: payload}),
  [INPUT_VALUE]: (state, {payload}) => ({...state, inputValue: payload}),
  [SET_CATEGORY]: (state, {payload}) => ({...state, categoriesList: payload }),
  [SET_CATEGORY_ERROR_MESSAGE]: (state, {payload}) => ({...state, categoryErrorMessage: payload}),
  [SET_SEARCH_ERROR_MESSAGE]: (state, {payload}) => ({...state, searchErrorMessage: payload}),
  [SET_FAV_JOKE]: (state, {payload}) => ({...state, favouriteJokes: payload}),
  DEFAULT: state => state
}

export const JokeReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT

  return handler(state, action)
}

export default JokeReducer;