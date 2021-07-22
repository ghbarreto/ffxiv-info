import React from 'react';
import { Menu } from 'semantic-ui-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
      <Link to="/marketboard">
        <Menu.Item
          style={{ color: 'white', outline: 'black' }}
          name="Marketboard"
          active={activeItem === 'Marketboard'}
          content="Marketboard"
          onClick={handleItemClick}
        />
      </Link>
    </Menu>
  );
};

export default HeaderExport;
