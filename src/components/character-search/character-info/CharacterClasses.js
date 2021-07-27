import React from 'react';

import { displayClasses } from '../../resources/utils/displayClasses';
import { displayUnlockedClasses } from '../../resources/utils/displayClasses';

const FIRST_CLASS = [1, 2, 3, 4, 5, 6, 7, 26, 29];
const JOBS = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
const UNLOCKED_STATE = [19, 20, 21, 22, 23, 24, 25, 27, 28, 30];
const LAST_JOBS = [31, 32, 33, 34, 35, 36, 37, 38];

// fix margins on levels

const CharacterClasses = ({ classes }) => {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '30px',
          marginBottom: '30px',
        }}
      >
        {displayClasses(classes, FIRST_CLASS)}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '30px',
          marginBottom: '30px',
        }}
      >
        {displayUnlockedClasses(classes, UNLOCKED_STATE)}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '30px',
          marginBottom: '30px',
        }}
      >
        {displayClasses(classes, LAST_JOBS)}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '30px',
          marginBottom: '30px',
        }}
      >
        {displayClasses(classes, JOBS)}
      </div>
    </div>
  );
};

export default CharacterClasses;
