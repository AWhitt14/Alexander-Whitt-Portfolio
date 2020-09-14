import React from 'react';
import './css/App.css';
import {Switch, Route, Link} from 'react-router-dom';

import Profile from './comp/Header';
import Landing from './comp/Landing';


function App() {
  return (
    <div className="App">
      <Profile />
      <Switch>
        <Route exact path='/' component={Landing} />
      </Switch>
      
    </div>
  );
}

export default App;
