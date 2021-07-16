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
    <Menu pointing>
      <Link to="/">
        <Menu.Item
          name="home"
          active={activeItem === 'home'}
          content="Home"
          onClick={handleItemClick}
        />
      </Link>
      <Link to="/characters">
        <Menu.Item
          name="messages"
          active={activeItem === 'messages'}
          content="Character Search"
          onClick={handleItemClick}
        />
      </Link>
      <Menu.Item
        name="friends"
        active={activeItem === 'friends'}
        content="Friends"
        onClick={handleItemClick}
      />
    </Menu>
  );
};

export default HeaderExport;
