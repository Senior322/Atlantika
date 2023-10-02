import React from 'react';
import LogoPng from 'assets/Logo.png';
import BigLogoPng from 'assets/BigLogo.png';
import css from './logo.module.scss';
import { Picture } from 'react-responsive-picture';

export default function Logo() {
  return (
    <a className={css.logoLink} href="/">
      <Picture
        sources={[
          {
            srcSet: LogoPng,
            media: '(max-width: 1439px)',
          },
          {
            srcSet: BigLogoPng,
          },
          {
            srcSet: LogoPng,
            type: 'png',
          },
        ]}
      />
    </a>
  );
}
