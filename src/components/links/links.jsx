import React from 'react';
import css from './links.module.scss';
import { ReactComponent as ViberIcon } from 'assets/viber.svg';
import { ReactComponent as WhatsappIcon } from 'assets/whatsapp.svg';
import { ReactComponent as TelegramIcon } from 'assets/telegram.svg';
import { ReactComponent as Vector3 } from 'assets/Vector 3.svg';

export default function Links() {
  return (
    <div className={css.linksContainer}>
      <div className={css.linksIcons}>
        <ViberIcon className={css.viberIcon} />
        <WhatsappIcon className={css.whatsAppIcon} />
        <TelegramIcon className={css.telegramIcon} />
      </div>
      <div className={css.numbersContainer}>
      <a className={css.telNumber} href="tel:+380939205870">+380 93 920 58 70 <span className={css.linksVector}><Vector3/></span></a>
      </div>
    </div>
  );
}
