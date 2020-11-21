import React from 'react';
import {Switch, Redirect, Route} from 'react-router-dom'
import styles from './App.module.css'
import Nav from '../Nav/Nav'
import HomePage from '../../pages/HomePage/HomePage';
import Favorites from '../../pages/Favorites/Favorites';

const App = () => {
  return (
    <div className={styles.wrapper}>
    <Nav />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/favorites" component={Favorites} />
      <Redirect to="/" />
    </Switch>
  </div>
  );
};

export default App;
