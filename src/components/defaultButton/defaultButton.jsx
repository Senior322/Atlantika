import React from 'react';
import css from 'components/defaultButton/defaultButton.module.scss';
import { ReactComponent as ButtonArrow } from 'assets/buttonArrow.svg';

export default function DefaultButton({ info, arrow, type }) {
  return (
    <button type={type} className={css.defaultButton}>
      <a className={css.defaultButtonLink} href="/">
        {info}
      </a>
      {arrow && (
        <span>
          <ButtonArrow />
        </span>
      )}
    </button>
  );
}
