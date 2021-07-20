import React from 'react';
import './EurekaAndBozjan.css';

const EurekaAndBozjan = ({ character, bozjan, eureka }) => {
  function display(name, level, exp) {
    return (
      <>
        <h4>{name}</h4>
        <div>Level: {level}</div>
        <div>Exp: {exp}</div>
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
