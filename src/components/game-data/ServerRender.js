import React, { useState, useEffect } from 'react';

import Form from '../Form';
import CharacterIndex from '../character-search/CharacterIndex';

const ServerRender = ({ listOfDatacenters }) => {
  const [datacenter, setDatacenter] = useState('');
  const [server, setServers] = useState({});
  const [serverName, setServerChoice] = useState('');
  const [characterName, setCharacterName] = useState('Rena');

  const displayServers = () => {
    // in case datacenter doesnt exist returns null
    if (!datacenter) return null;
    // returning the list of servers based on the comparison to datacenter
    for (let i in listOfDatacenters) {
      if (datacenter === i) {
        setServers(listOfDatacenters[i]);
        console.log(server);
      }
      <Form servers={server} />;
    }
  };

  useEffect(() => {
    displayServers();
  }, [datacenter]);

  const getDatacenter = e => {
    return setDatacenter(e);
  };
  const inputValue = e => {
    return setCharacterName(e);
  };
  const serverChoice = e => {
    return setServerChoice(e);
  };

  // const displayCharacterData = () => {
  //   console.log(characterName);
  //   return characterName ? (

  //   ) : null;
  // };

  return (
    <form>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Form
          inputLabel="Character Name"
          inputPlaceholder="Character Name"
          formSelectLabel="Datacenter"
          formSelectPlaceholder="Choose a datacenter"
          datacenters={listOfDatacenters}
          getDatacenter={getDatacenter}
          servers={server}
          inputValue={inputValue}
          serverChoice={serverChoice}
        />
      </div>
      {console.log(characterName)}
      <CharacterIndex name={characterName} serverName={serverName} />
    </form>
  );
};

export default ServerRender;
