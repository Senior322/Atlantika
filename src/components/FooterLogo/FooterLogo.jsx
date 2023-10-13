import ResponsivePicture from 'components/resposivePicture/responsivePicture'
import React from 'react'
import LittleFooterLogo from 'assets/footerLogoSmall.svg'
import BigFooteRolo from 'assets/BigFooterLogo.png'

export default function FooterLogo() {
  return (
    <a href="/">
      <ResponsivePicture little={LittleFooterLogo} big={BigFooteRolo}/>
    </a>
  )
}
