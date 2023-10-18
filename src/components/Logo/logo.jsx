import React from 'react';
import LogoPng from 'assets/Logo.png';
import BigLogoPng from 'assets/BigLogo.png';
import css from './logo.module.scss';
import ResponsivePicture from 'components/resposivePicture/responsivePicture';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link className={css.logoLink} to="/">
      <ResponsivePicture little={LogoPng} big={BigLogoPng} alt='logo'/>
    </Link>
  );
}
