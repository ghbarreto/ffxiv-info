import React from 'react';

import { classJobs } from '../../resources/classJobs';

const CharacterClasses = ({ classes }) => {
  return classes.map(characterClass => {
    if (characterClass.ClassID > 20) {
      return (
        <div>
          <img
            style={{ width: '20px', height: '20px' }}
            src={classJobs(characterClass.ClassID)}
            alt={characterClass.Name}
          />
        </div>
      );
    }
  });
};

export default CharacterClasses;
