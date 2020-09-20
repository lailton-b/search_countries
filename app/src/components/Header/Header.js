import React from 'react';
import { Template, Container, Title, Switch } from './HeaderStyles';
import { ReactComponent as Moon } from '../../img/moon.svg';
import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';

const Header = ({ setTheme }) => {
  function switchTheme() {
    const storageValue = JSON.parse(localStorage.getItem('theme'));
    if (storageValue && storageValue.title === 'dark') setTheme(light);
    else return setTheme(dark);
  }

  return (
    <Template>
      <Container>
        <Title>Where in the world?</Title>
        <Switch onClick={switchTheme}>
          <Moon />
          <span>Dark Mode</span>
        </Switch>
      </Container>
    </Template>
  );
};

export default Header;
