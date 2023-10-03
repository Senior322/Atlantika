import React from 'react'
import css from './bigLogo.module.scss'
import BigLogoSvg from 'assets/bigLogo.svg'
import BigLogoPng2 from 'assets/HeroBigLogo.png'
import ResponsivePicture from 'components/resposivePicture/responsivePicture'


export default function BigLogo() {
  return (
    <a className={css.bigLogo}  href="/">
       <ResponsivePicture little={BigLogoSvg} big={BigLogoPng2} alt='logo'/>
    </a>
  )
}
