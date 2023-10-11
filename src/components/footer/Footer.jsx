import React from 'react'
import css from 'components/footer/Footer.module.scss'
import { ReactComponent as TelephoneIcon } from 'assets/telephone.svg'

export default function Footer() {
  return (
    <section className={css.footer}>
      <div className={css.footerContainer}>
         <div className={css.katalog}>
            <ul>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
            </ul>
         </div>
         <div className={css.footerLogo}></div>
         <div className={css.footerSocial}>
            <ul>
               <li>
                  <span>Ігор</span> <span>+380 93 920 58 70</span><span><TelephoneIcon /></span>
               </li>
               <li><span>Роман</span><span>+380 93 672 74 78</span><span><TelephoneIcon /></span></li>
            </ul>
         </div>
         <div className={css.footerLinks}></div>
      </div>
      </section>
  )
}
