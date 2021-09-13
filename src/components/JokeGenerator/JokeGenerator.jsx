import React, {useContext, useState, useEffect, Fragment} from 'react';
import {JokeContext} from '../../context/JokeContext/JokeContext';

import classes from './JokeGenerator.module.scss'

function JokeGenerator() {
  console.log('jokeCOntext', JokeContext)
  const {jokeCategories,
     categoriesList,
     favouriteJokes, 
     inputValue, 
     setCategory, 
     getJokeCategories, 
     getJoke, 
     getRandomJoke, 
     setInputValue, 
     setJokeType, 
     jokeList, 
     jokeType,
     categoryErrorMessage,
     searchErrorMessage, getFavJokesFromLS
    } = useContext(JokeContext);

  const [choosedOption, setValue] = useState(false);

  const CategoryOption = 'CategoryOption'
  const SearchOption = 'SearchOption'

  useEffect( ()=> {
    getJokeCategories()
  }, [])


  const onChangeValue = (event) => {

    if(event.target.value === CategoryOption) {
      setJokeType(event.target.value)
    }

    else if (event.target.value === SearchOption) {
      setJokeType(event.target.value)
    }

    else {
      setJokeType(event.target.value)
    }

    setValue(event.target.value);
  }
  const chooseCategory = (event) => {
    const categoryName = event.target.getAttribute('data-value');

    if(categoriesList.includes(categoryName)) {
      const indexOfCategory = categoriesList.indexOf(categoryName)

      categoriesList.splice(indexOfCategory, 1);
      setCategory(categoriesList)
    }
    else {
      categoriesList.push(event.target.getAttribute('data-value'))
      setCategory(categoriesList);
    }
  }

 const handleKeyDown = (event) => {
  if (event.key === 'Enter') {
    getJoke(event);
  }
 }

  const categoriesDiv = 
  <div className={classes.categoriesList}>
    {categoryErrorMessage.length>0 ? <p className={classes.Error}>{categoryErrorMessage}</p> : null}
    {jokeCategories.map( (joke)=> {
      const cls = [classes.Category];

      if(categoriesList.includes(joke)) {
        cls.push(classes.OutlineCategory)
      }

      return (
        <p className={cls.join(' ')} data-value={joke} onClick={chooseCategory} key={joke+Math.random()}>{joke}</p>
      )
    })}
  </div>
    
  const searchDiv =
   <Fragment>
    {searchErrorMessage.length>0 ?
    <p className={classes.Error}>{searchErrorMessage}</p> : null}

    <input type="text" placeholder="Free text search..." onFocus={(e) => e.target.placeholder = ""} onKeyDown={handleKeyDown} onChange={(event)=>setInputValue(event.target.value)}/>
  </Fragment>
    

  return (
   <div className={classes.JokeGenerator}>
    <section className={classes.Title}>
     <h1>Hey!</h1>
     <h2>Let's try to find joke for you</h2>
    </section>
    <section className={classes.Radio}>
      <div>
        <input 
          type="radio" 
          id="RandomOption" 
          name="radio" 
          value="RandomOption"
          onChange={(event)=>onChangeValue(event, false)}
          defaultChecked/>
        <label htmlFor="RandomOption">Random</label>
      </div>

      <div>
        <input 
          type="radio" 
          id="CategoryOption" 
          name="radio"
          value="CategoryOption"
          onChange={(event)=>onChangeValue(event,true)}
          />
        <label htmlFor="CategoryOption">From Categories</label>
        <br/>
        { choosedOption==='CategoryOption' ?  categoriesDiv : null}
      </div>

      <div className={classes.SearchOption}>
        <input 
          type="radio" 
          id="SearchOption" 
          name="radio" 
          value="SearchOption"
          onChange={(event)=>onChangeValue(event, true)}
          />
        <label htmlFor="SearchOption">Search</label>
        <br/>
        { choosedOption==='SearchOption' ? searchDiv  : null}

      </div>
     </section>

    <button className={classes.JokeButton} onClick={(event)=>getJoke(event)}>Get a joke</button>
   </div>
  );
}

export default JokeGenerator;