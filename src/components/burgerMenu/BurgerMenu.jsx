import React, { useState } from 'react';
import { ReactComponent as BurgerIcon } from 'assets/burger.svg';
import css from 'components/burgerMenu/burgerMenu.module.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as ViberIcon } from 'assets/viber.svg';
import { ReactComponent as WhatsappIcon } from 'assets/whatsapp.svg';
import { ReactComponent as TelegramIcon } from 'assets/telegram.svg';

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const MenuToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={css.BurgerMenu}>
      <button onClick={MenuToggle}><BurgerIcon/></button>
      {isOpen && (
         <div className={css.burgerArena}>
        <ul className={css.burgerList}>
      <li className={css.burgerListLi}><Link to="/catalog">Каталог товарів</Link></li>
      <li className={css.burgerListLi}><Link to="/discounts">Система знижок</Link></li>
      <li className={css.burgerListLi}><Link to="/drop">Дропшипінг</Link></li>
      <li className={css.burgerListLi}><Link to="/delivery">Доставка і оплата</Link></li>
      <li className={css.burgerListLi}><Link to="/actions">Акції</Link></li>
      <li className={css.burgerListLi}><Link to="/contacts">Контакти</Link></li>
      <li className={css.burgerListLi}><Link to="/about">Про нас</Link></li>
        </ul>
        <div className={css.burgerBorder}></div>
        <div className={css.burgerSecondContainer}>
        <p className={css.burgerSomeLinks}>Кошик</p>
        <p className={css.burgerSomeLinks}>Особистий кабінет</p>
        <div className={css.BurgerIcons}>
        <ViberIcon className={css.viberIcon} />
        <WhatsappIcon className={css.whatsAppIcon} />
        <TelegramIcon className={css.telegramIcon} />
      </div>
      <div className={css.burgerNumberContainer}>
      <a className={css.telNumber} href="tel:+380939205870">+380 93 920 58 70 </a>
      <a className={css.telNumber} href="tel:+380936727478">+380 93 672 74 78 </a>
      </div>
      <p className={css.BurgerTimeInfo}>Пн.- пт.: с 10:00 до 19:00</p>
        </div>
        </div>
      )}
    </div>
  );
}
