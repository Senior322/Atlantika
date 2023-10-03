import React from 'react';
import LogoPng from 'assets/Logo.png';
import BigLogoPng from 'assets/BigLogo.png';
import css from './logo.module.scss';

export default function Logo() {
  return (
    <a className={css.logoLink} href="/">
      <img
            srcSet={`${LogoPng} 1439, ${BigLogoPng} 1440w`}
            sizes="(max-width: 1439px) 1439px, 1440px"
            alt="myImage"
          />
    </a>
  );
}
