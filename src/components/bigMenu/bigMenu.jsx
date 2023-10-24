import React from 'react';
import css from 'components/bigMenu/bigMenu.module.scss';
import { Link } from 'react-router-dom';

export default function BigMenu() {
  return (
   <div className={css.downContainer}>
   <ul className={css.downContainerUl}>
      <li className={css.downContainerLi}><Link to="/catalog">Каталог товарів</Link></li>
      <li className={css.downContainerLi}><Link to="/discounts">Система знижок</Link></li>
      <li className={css.downContainerLi}><Link to="/drop">Дропшипінг</Link></li>
      <li className={css.downContainerLi}><Link to="/delivery">Доставка і оплата</Link></li>
      <li className={css.downContainerLi}><Link to="/actions">Акції</Link></li>
      <li className={css.downContainerLi}><Link to="/contacts">Контакти</Link></li>
      <li className={css.downContainerLi}><Link to="/about">Про нас</Link></li>
   </ul>
   </div>
  )
}
