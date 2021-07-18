import React from 'react';
import { Menu } from 'semantic-ui-react';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';

const HeaderExport = () => {
  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };
  return (
    <Menu pointing style={{ backgroundColor: 'rgb(241, 182, 18)' }}>
      <Link to="/">
        <Menu.Item
          style={{ color: 'white', outline: 'black' }}
          name="home"
          active={activeItem === 'home'}
          content="Home"
          onClick={handleItemClick}
        />
      </Link>
      <Link to="/characters">
        <Menu.Item
          style={{ color: 'white', outline: 'black' }}
          name="messages"
          active={activeItem === 'messages'}
          content="Character Search"
          onClick={handleItemClick}
        />
      </Link>
      <Menu.Item
        style={{ color: 'white', outline: 'black' }}
        name="friends"
        active={activeItem === 'friends'}
        content="Friends"
        onClick={handleItemClick}
      />
    </Menu>
  );
};

export default HeaderExport;
