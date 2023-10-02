import React from 'react';
import { ReactComponent as Door } from 'assets/icon enter.svg';
import css from 'components/login/login.module.scss'


export default function login() {
  return (
    <div className={css.loginContainer}>
      {/* <svg className={css.loginDoor}>
         <use xlinkHref={Door}/>
      </svg> */}
      <Door className={css.loginDoor}/>
      <p>Реєстрація / Вхід</p>
    </div>
  )
}
