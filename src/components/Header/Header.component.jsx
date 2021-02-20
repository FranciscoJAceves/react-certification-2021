import React from 'react';
import { HeaderContainer, Loggin, Menu, ThemeToggle, SearchInput } from './Header.styled';

function Header() {
  return (
    <HeaderContainer>
      <Menu>Menu</Menu>
      <SearchInput />
      <ThemeToggle>Dark Mode</ThemeToggle>
      <Loggin>Login</Loggin>
    </HeaderContainer>
  );
}

export default Header;
