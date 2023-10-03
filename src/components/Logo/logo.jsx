import React from 'react';
import LogoPng from 'assets/Logo.png';
import BigLogoPng from 'assets/BigLogo.png';
import css from './logo.module.scss';
import ResponsivePicture from 'components/resposivePicture/responsivePicture';

export default function Logo() {
  return (
    <a className={css.logoLink} href="/">
      <ResponsivePicture little={LogoPng} big={BigLogoPng} alt='logo'/>
    </a>
  );
}
