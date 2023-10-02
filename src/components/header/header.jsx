import React from 'react';
import css from './header.module.scss';
import Logo from 'components/Logo/logo';
import Basket from 'components/basket/basket';
import { ReactComponent as Burger } from 'assets/burger.svg';
import Links from 'components/links/links';
import Login from 'components/login/login';
import BigMenu from 'components/bigMenu/bigMenu';

export default function Header() {
  return (
    <header className={css.Header}>
      <div className={css.HeaderContainer}>
         <div className={css.headerFirs}>
        <Basket />
        <Login />
        <Logo />
        <Links />
        <button type="button" className={css.menu}>
          <Burger></Burger>
        </button>
        </div>
        <BigMenu/>
      </div>
    </header>
  );
}
