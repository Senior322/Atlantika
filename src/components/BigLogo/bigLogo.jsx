import React from 'react'
import css from './bigLogo.module.scss'
import BigLogoSvg from 'assets/bigLogo.svg'
// import BigLogoPng2 from 'assets/HeroBigLogo.png'
import BigLogoPng2 from 'assets/viber.svg'


export default function BigLogo() {
  return (
    <a className={css.bigLogo}  href="/">
       <img
            srcSet={`${BigLogoPng2} , ${BigLogoSvg} 1440w`}
            sizes="(max-width: 1439px) 1439px, 1440px"
            alt="myImage"
          />
    </a>
  )
}
