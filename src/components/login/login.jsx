import React from 'react';
import { ReactComponent as Door } from 'assets/icon enter.svg';
import css from 'components/login/login.module.scss';
import { Link } from 'react-router-dom';

export default function login() {
  return (
    <div className={css.loginContainer}>
      <Link to="/Registration">
        <Door className={css.loginDoor} />
        <p>Реєстрація / Вхід</p>
      </Link>
    </div>
  );
}
