import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Transition, Message } from 'semantic-ui-react';

const DisplayAlert = ({ negative, positive, messageHeader, message }) => {
  const [visible, setVisibility] = useState(false);

  const setVisibleContent = () => {
    return setVisibility(true);
  };

  useEffect(() => {
    setVisibleContent();
  }, [negative || positive]);

  useLayoutEffect(() => {
    return () => {
      setVisibility(true);
    };
  }, []);
  // test 2
  return (
    <div style={{ width: '25%', margin: '0 auto', marginBottom: '20px' }}>
      <Transition visible={visible} animation="scale" duration={500}>
        <Message negative={negative} positive={positive}>
          <Message.Header>{messageHeader}</Message.Header>
          <p>{message}</p>
        </Message>
      </Transition>
    </div>
  );
};
export default DisplayAlert;
