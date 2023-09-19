import React from 'react';
import css from './header.module.scss';
import Logo from 'components/Logo/logo';
import Basket from 'components/basket/basket';
import { ReactComponent as Burger } from 'assets/burger.svg'


export default function Header() {
  return (
    <header className={css.Header}>
      <div className={css.HeaderContainer}>
            <Basket/>
           <Logo />    
           <button type='button' className={css.menu}><Burger></Burger></button>
         </div>
    </header>
  );
}
