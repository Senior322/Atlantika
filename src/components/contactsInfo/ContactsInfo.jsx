import React from 'react';
import css from 'components/contactsInfo/COntactsInfo.module.scss';
import { ReactComponent as TelephoneIcon } from 'assets/telephone.svg';
import { ReactComponent as Location } from 'assets/location.svg';
import { ReactComponent as TimeFrame } from 'assets/timeFrame.svg';
import { ReactComponent as ViberIcon } from 'assets/viber.svg';
import { ReactComponent as WhatsappIcon } from 'assets/whatsapp.svg';
import { ReactComponent as TelegramIcon } from 'assets/telegram.svg';
// import Map from 'components/map/Map';

export default function ContactsInfo() {
  return (
    <section className={css.ContactsInfoSection}>
      <div className={css.ContactsInfoContainer}>
        <div className={css.ContactsInfoMapContainer}>
          <div>
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4533.645451968131!2d19.02420959283299!3d47.49533438449677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc265afe9bb9%3A0x983c3e82acfa1af4!2sFlex%20Gym%20Budapest!5e0!3m2!1suk!2sua!4v1704786581474!5m2!1suk!2sua"
              width="600"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe> */}
          </div>
        </div>
        <div className={css.ContactsInfoInfoContainer}>
          <h2 className={css.ContactsInfoTitle}>Контакти</h2>
          <div className={css.footerSocial}>
            <div className={css.hiddenIcons}>
              <ViberIcon className={css.viberIcon} />
              <WhatsappIcon className={css.whatsAppIcon} />
              <TelegramIcon className={css.telegramIcon} />
            </div>
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
                <div></div>
                <div>
                  <p className={css.footerSocialTime}>
                    Пн.- пт.: с 10:00 до 19:00
                  </p>
                  <TimeFrame />
                </div>
              </li>
            </ul>
            <div className={css.footerInfoContainer}>
              <p className={css.footerInfoP}>Київ, вул. Андрющенко 2/26</p>
              <span className={css.footerInfoSpan}>
                <Location />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
