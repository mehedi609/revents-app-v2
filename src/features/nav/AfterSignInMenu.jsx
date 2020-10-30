import React from 'react';
import { Dropdown, Image, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const AfterSignInMenu = ({ signout }) => {
  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src="/assets/user.png" />
      <Dropdown pointing="top left" text="bob">
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to="/createEvent"
            text="Create Event"
            icon="plus"
          />
          <Dropdown.Item text="My Profile" icon="user" />
          <Dropdown.Item text="Sign Out" icon="power" onClick={signout} />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default AfterSignInMenu;
