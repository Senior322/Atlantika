import React from 'react';
import css from 'components/footer/Footer.module.scss';
import { ReactComponent as TelephoneIcon } from 'assets/telephone.svg';
import { ReactComponent as Location } from 'assets/location.svg';
import FooterLogo from 'components/FooterLogo/FooterLogo';
import { ReactComponent as FooterFacebook } from 'assets/footerFb.svg';
import { ReactComponent as FooterYoutube } from 'assets/footerYoutube.svg';
import { ReactComponent as FooterInst } from 'assets/footerInstagram.svg';
import { ReactComponent as TimeFrame } from 'assets/timeFrame.svg';

export default function Footer() {
  return (
    <section className={css.footer}>
      <div className={css.footerContainer}>
        <div className={css.footerLogoIcon}>
          <FooterLogo />
        </div>
        <div className={css.footerSocial}>
          <ul className={css.footerUl}>
            <li className={css.footerUlLiFirst}>
              <span className={css.footerUlLiSpanName}>Ігор</span>
              <a href="/">
                <span className={css.footerUlLiSpanNumber}>
                  +380 93 920 58 70
                </span>
                <TelephoneIcon />
              </a>
            </li>
            <li className={css.footerUlLiFirst}>
              <span className={css.footerUlLiSpanName}>Роман</span>
              <a href="/">
                <span className={css.footerUlLiSpanNumber}>
                  +380 93 672 74 78
                </span>
                <TelephoneIcon />
              </a>
            </li>
            <li className={css.footerUlLiFirst}>
               <div></div><div><p className={css.footerSocialTime}>Пн.- пт.: с 10:00 до 19:00</p>
                <TimeFrame /></div>
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
            <li className={css.footerUlSecondLi}>Каталог товарів</li>
            <li className={css.footerUlSecondLi}>Доставка і оплата</li>
            <li className={css.footerUlSecondLi}>Система знижок</li>
            <li className={css.footerUlSecondLi}>Контакти</li>
            <li className={css.footerUlSecondLi}>Дропшипінг</li>
            <li className={css.footerUlSecondLi}>Про нас</li>
          </ul>
        </div>
      </div>
        <div className={css.footerLinks}>
          <span className={css.footerLinksFirst}>ATLANTIKA.BIZ © 2022</span>
          <span className={css.footerLinksSecond}>
            <FooterFacebook />
            <FooterYoutube />
            <FooterInst />
          </span>
        </div>
    </section>
  );
}
