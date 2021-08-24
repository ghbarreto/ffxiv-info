import React, { useState } from 'react';
import Servers from '../game-data/Servers';
import FreeCompanyFetch from './FreeCompanyFetch';
import DisplayAlert from '../DisplayAlert';
import Spinner from '../Spinner';

const FreeCompanyHome = () => {
  const [name, setName] = useState('');
  const [server, setServer] = useState('');

  const inputValue = e => {
    setName(e);
  };

  const serverChoice = e => {
    setServer(e);
  };

  const userSelectedBothNameAndServer = () => {
    if (!name && server) {
      return (
        <DisplayAlert
          negative={true}
          messageHeader={'There is an error with your request'}
          message={'Please provide a name'}
        />
      );
    }
    if (name && !server) {
      return (
        <DisplayAlert
          negative={true}
          messageHeader={'There is an error with your request'}
          message={'Please provide a server'}
        />
      );
    }
    return;
  };

  return (
    <div>
      {userSelectedBothNameAndServer()}
      <Servers
        inputValue={inputValue}
        serverChoice={serverChoice}
        inputLabel={'Free Company Search'}
        inputPlaceholder={'Search FC'}
        formSelectLabel={'Select a Database'}
        formSelectPlaceholder={'Database'}
        serverLabel={'Select a Server'}
        serverPlaceholder={'Server'}
      />
      {name && server ? <FreeCompanyFetch name={name} server={server} /> : ''}
    </div>
  );
};

export default FreeCompanyHome;
