import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Account from './page/Account';
import SearchPhotos from './page/SearchPhotos';


const App = () => {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={SearchPhotos} /> 
      <Route exact path="/account/:id" component={Account} /> 
      </Switch>
    </Router >
  );
}

export default App;
