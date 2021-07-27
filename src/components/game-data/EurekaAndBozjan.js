import React from 'react';
import './EurekaAndBozjan.css';
import NumberFormat from 'react-number-format';

const EurekaAndBozjan = ({ character, bozjan, eureka }) => {
  function display(name, level, exp) {
    return (
      <>
        <h3 style={{ color: 'white' }}>{name}</h3>
        <div
          style={{
            color: 'white',
            fontSize: '20px',
            display: 'flex',
            margin: '5px',
          }}
        >
          Level{' '}
          <div style={{ color: 'rgb(241, 182, 18)', marginLeft: '5px' }}>
            {level}
          </div>
        </div>
        <div
          style={{
            color: 'lightgreen',
            fontSize: '20px',
            display: 'flex',
            margin: '5px',
          }}
        >
          Exp
          <div style={{ color: 'rgb(241, 182, 18)', marginLeft: '5px' }}>
            <NumberFormat
              value={exp}
              thousandSeparator={true}
              displayType={'text'}
            />
          </div>
        </div>
      </>
    );
  }
  return (
    <div className="first">
      <div className="bozjan">
        {display(bozjan.Name, bozjan.Level, bozjan.Mettle)}
      </div>
      <div className="eureka">
        {display(eureka.Name, eureka.Level, eureka.ExpLevel)}
      </div>
    </div>
  );
};

export default EurekaAndBozjan;
