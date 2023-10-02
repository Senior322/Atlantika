import React from 'react';
import css from './registrationBtn.module.scss';
import { ReactComponent as ButtonArrow } from 'assets/buttonArrow.svg';

export default function RegistrationBtn() {
  return (
    <button type="button" className={css.registrationBtn}>
      <a className={css.registrationBtnLink} href="/">
        Реєстрація
      </a>
      <ButtonArrow />
    </button>
  );
}
