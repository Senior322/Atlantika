import React from 'react';
import css from 'components/footer/Footer.module.scss';
import { ReactComponent as TelephoneIcon } from 'assets/telephone.svg';
import { ReactComponent as Location } from 'assets/location.svg';
import FooterLogo from 'components/FooterLogo/FooterLogo';

export default function Footer() {
  return (
    <section className={css.footer}>
      <div className={css.footerContainer}>
        <FooterLogo />
        <div className={css.footerLogo}></div>
        <div className={css.footerSocial}>
          <ul className={css.footerUl}>
            <li>
              <span>Ігор</span> <span>+380 93 920 58 70</span>
              <span>
                <TelephoneIcon />
              </span>
            </li>
            <li>
              <span>Роман</span>
              <span>+380 93 672 74 78</span>
              <span>
                <TelephoneIcon />
              </span>
            </li>
          </ul>
          <div className={css.footerInfoContainer}>
            <p className={css.footerInfoP}>Київ, вул. Андрющенко 2/26</p>
            <span className={css.footerInfoSpan}>
              <Location />
            </span>
          </div>
        </div>
        <div className={css.katalog}>
          <ul className={css.footerUlSecond}>
            <li>Каталог товарів</li>
            <li>Система знижок</li>
            <li>Дропшипінг</li>
            <li>Доставка і оплата</li>
            <li>Контакти</li>
            <li>Про нас</li>
          </ul>
        </div>
        <div className={css.footerLinks}>
         <span className={css.footerLinksFirst}>ATLANTIKA.BIZ © 2022</span>
         <span className={css.footerLinksSecond}></span>
        </div>
      </div>
    </section>
  );
}
