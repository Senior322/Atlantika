import React, { useState } from 'react';
import { ReactComponent as BurgerIcon } from 'assets/burger.svg';
import css from 'components/burgerMenu/burgerMenu.module.scss';
import { Link } from 'react-router-dom';

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={css.BurgerMenu}>
      <button onClick={handleMenuToggle}><BurgerIcon/></button>
      {isOpen && (
        <ul className={css.burgerList}>
      <li><Link to="/catalog">Каталог товарів</Link></li>
      <li><Link to="/discounts">Система знижок</Link></li>
      <li><Link to="/drop">Дропшипінг</Link></li>
      <li><Link to="/delivery">Доставка і оплата</Link></li>
      <li><Link to="/actions">Акції</Link></li>
      <li><Link to="/contacts">Контакти</Link></li>
      <li><Link to="/about">Про нас</Link></li>
        </ul>
      )}
    </div>
  );
}
