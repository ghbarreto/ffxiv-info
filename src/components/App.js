import React from 'react';

import Header from './HeaderExport';
import Servers from './game-data/Servers';

const App = () => {
  return (
    <div>
      <Header />
      <Servers />
    </div>
  );
};

export default App;
