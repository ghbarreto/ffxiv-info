import React from 'react';
import { Input, Menu, Segment } from 'semantic-ui-react';
import { useState } from 'react';

const HeaderExport = () => {
  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };
  return (
    <Menu pointing>
      <Menu.Item
        name="home"
        active={activeItem === 'home'}
        content="Home"
        onClick={handleItemClick}
      />
      <Menu.Item
        name="messages"
        active={activeItem === 'messages'}
        content="Messages"
        onClick={handleItemClick}
      />
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
