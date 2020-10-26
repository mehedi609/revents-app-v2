import React from 'react';
import { Button, Menu } from 'semantic-ui-react';

const BeforeSignInMenu = ({ setAuthenticated }) => {
  return (
    <Menu.Item position="right">
      <Button
        basic
        inverted
        content="Login"
        onClick={() => setAuthenticated(true)}
      />
      <Button
        basic
        inverted
        content="Register"
        style={{ marginLeft: '0.5em' }}
      />
    </Menu.Item>
  );
};

export default BeforeSignInMenu;
