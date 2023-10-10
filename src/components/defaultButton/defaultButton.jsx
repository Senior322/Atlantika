import React from 'react';
import css from 'components/defaultButton/defaultButton.module.scss';
import { ReactComponent as ButtonArrow } from 'assets/buttonArrow.svg';

export default function DefaultButton({ info, arrow, type }) {
  return (
    <button type={type} className={css.defaultButton}>
      <div className={css.defaultButtonLink}>
        {info}
      </div>
      {arrow && (
        <span>
          <ButtonArrow />
        </span>
      )}
    </button>
  );
}
