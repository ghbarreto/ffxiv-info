import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Header from './HeaderExport';
import Servers from './game-data/Servers';
import CharacterInfo from './character-search/CharacterInfo';

// cinza azulado - rgb(17, 35, 51)
// azul tema - rgb(38, 115, 216)
// highlight - rgb(241, 182, 18)

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
