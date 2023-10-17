import React from 'react';
import css from 'components/defaultButton/defaultButton.module.scss';
import { ReactComponent as ButtonArrow } from 'assets/buttonArrow.svg';

export default function DefaultButton({ info, arrow, className='', type, ...props }) {
  return (
    <button type={type} className={css.defaultButton + ' ' + className} {...props}>
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
