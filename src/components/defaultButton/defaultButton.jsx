import React from 'react';
import css from 'components/defaultButton/defaultButton.module.scss';
import { ReactComponent as ButtonArrow } from 'assets/buttonArrow.svg';

export default function DefaultButton({ info, arrow, width, height, type}) {
  const buttonStyle = {
    width: width,
    height: height
  };
  return (
    <button style={buttonStyle} type={type} className={css.defaultButton}>
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
