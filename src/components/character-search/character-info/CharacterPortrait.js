import React from 'react';
import './CharacterPortrait.css';

const CharacterPortrait = ({ portrait }) => {
  return <img className="character-portrait" src={portrait} alt="portrait" />;
};

export default CharacterPortrait;
