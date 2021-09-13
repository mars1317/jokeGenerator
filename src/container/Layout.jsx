import React, {Fragment} from 'react';
import JokeGenerator from '../components/JokeGenerator/JokeGenerator'
import JokeList from '../components/JokeList/JokeList'
import MenuToggle from '../components/MenuToggle/MenuToggle'
import classes from './Layout.module.scss'

function Layout() {
  return (
    <Fragment>
      <div className={classes.Layout}>
        <div className={classes.JokeSection}>
          <JokeGenerator></JokeGenerator>
          <JokeList></JokeList>
        </div>
        <MenuToggle/>
      </div>
    </Fragment>
  );
}

export default Layout;