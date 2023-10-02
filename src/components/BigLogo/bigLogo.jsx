import React from 'react'
import css from './bigLogo.module.scss'
import BigLogoSvg from 'assets/bigLogo.svg'
import BigLogoPng from 'assets/HeroBigLogo.png'
import { Picture } from 'react-responsive-picture';

export default function BigLogo() {
  return (
    <a className={css.bigLogo}  href="/">
      <Picture
        sources={[
          {
            srcSet: BigLogoSvg,
            media: '(max-width: 1439px)',
          },
          {
            srcSet: BigLogoPng,
          },
          {
            srcSet: BigLogoSvg,
            type: 'svg',
          },
        ]}
      />

    </a>
  )
}
