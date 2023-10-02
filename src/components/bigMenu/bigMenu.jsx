import React from 'react';
import css from 'components/bigMenu/bigMenu.module.scss';

export default function BigMenu() {
  return (
   <div className={css.downContainer}>
   <ul className={css.downContainerUl}>
      <li className={css.downContainerLi}><a href="/">Каталог товарів</a></li>
      <li className={css.downContainerLi}><a href="/">Система знижок</a></li>
      <li className={css.downContainerLi}><a href="/">Дропшипінг</a></li>
      <li className={css.downContainerLi}><a href="/">Доставка і оплата</a></li>
      <li className={css.downContainerLi}><a href="/">Акції</a></li>
      <li className={css.downContainerLi}><a href="/">Контакти</a></li>
      <li className={css.downContainerLi}><a href="/">Про нас</a></li>
   </ul>
   </div>
  )
}
