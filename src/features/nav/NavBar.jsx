import React, { useState } from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';
import { NavLink, useHistory } from 'react-router-dom';
import BeforeSignInMenu from './BeforeSignInMenu';
import AfterSignInMenu from './AfterSignInMenu';

const NavBar = ({ setFormOpen }) => {
  const history = useHistory();
  const [authenticated, setAuthenticated] = useState(false);

  function handleSignOut() {
    setAuthenticated(false);
    history.push('/');
  }

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} exact to="/" header>
          <img src="/assets/logo.png" alt="logo" style={{ marginRight: 15 }} />
          Re-vents
        </Menu.Item>
        <Menu.Item as={NavLink} to="/events" name="Events" />
        {authenticated && (
          <Menu.Item as={NavLink} to="/createEvent">
            <Button positive inverted content="Create Event" />
          </Menu.Item>
        )}
        {authenticated ? (
          <AfterSignInMenu signout={handleSignOut} />
        ) : (
          <BeforeSignInMenu setAuthenticated={setAuthenticated} />
        )}
      </Container>
    </Menu>
  );
};

export default NavBar;
