import React from 'react'
import css from './bigLogo.module.scss'
import BigLogosvg from 'assets/bigLogo.svg'
import BigLogopng from 'assets/HeroBigLogo.png'
import { Picture } from 'react-responsive-picture';

export default function BigLogo() {
  return (
    <a className={css.bigLogo}  href="/">
      <Picture
        sources={[
          {
            srcSet: BigLogosvg,
            media: '(max-width: 1439px)',
          },
          {
            srcSet: BigLogopng,
          },
          {
            srcSet: BigLogosvg,
            type: 'svg',
          },
        ]}
      />

    </a>
  )
}
