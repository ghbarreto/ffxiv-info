import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Header from './HeaderExport';
import CharacterIndex from './character-search/CharacterIndex';
import CharacterInfo from './character-search/CharacterInfo';
import MarketBoardIndex from './marketboard/MarketBoardIndex';
import MarketBoardFetchItems from './marketboard/MarketBoardFetchItems';
import ServerList from './server-status/ServerList'

// cinza azulado - rgb(17, 35, 51)
// azul tema - rgb(38, 115, 216)
// highlight - rgb(241, 182, 18)

const App = () => {
  return (
    <Router>
      <Header />
      <Route path="/characters" exact component={CharacterIndex} />
      <Route path="/characters/:id" exact component={CharacterInfo} />
      <Route path="/marketboard" exact component={MarketBoardIndex} />
      <Route
        path="/fetch/:id/:server/:database"
        component={MarketBoardFetchItems}
      />
      <Route path="/" exact component={ServerList} />
    </Router>
  );
};

export default App;
