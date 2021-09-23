import '../styles/App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemList from '../containers/ItemList';
import Ingredients from '../containers/Ingeredients';
import NavBar from './NavBar';
import '../styles/style.module.css';

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/" component={ItemList} />
      <Route path="/:recipe_id" component={Ingredients} />
    </Switch>
  </BrowserRouter>
);

export default App;
