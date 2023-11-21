import React from 'react';
import css from './header.module.scss';
import Logo from 'components/Logo/logo';
import Basket from 'components/basket/basket';
import Links from 'components/links/links';
import Login from 'components/login/login';
import BigMenu from 'components/bigMenu/bigMenu';
import BurgerMenu from 'components/burgerMenu/BurgerMenu';

export default function Header() {
  return (
    <header className={css.Header}>
      <div className={css.HeaderContainer}>
        <div className={css.headerFirs}>
          <Basket />
          <Login />
          <div className={css.headerLogoStyle}>
            <Logo />
          </div>
          <Links />
          <button type="button" className={css.menu}>
            <BurgerMenu/>
          </button>
          
        </div>
        <BigMenu />
      </div>
    </header>
  );
}
