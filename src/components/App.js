import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Header from './HeaderExport';
import Servers from './game-data/Servers';
import CharacterInfo from './character-search/CharacterInfo';

const App = () => {
  return (
    <Router>
      <Header />
      <Route path="/characters" exact>
        <Servers />
      </Route>
      <Route path="/characters/:id" exact component={CharacterInfo} />
    </Router>
  );
};

export default App;
