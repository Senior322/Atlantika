import React from 'react';
import css from 'components/CustomDropList/CustomDropList.module.scss';

export default function CustomDropList() {
  return (
    <ol className={css.customDropOl}>
      <li className={css.customDropLi}>
        <p>Робите замовлення на сайті.</p>
      </li>
      <li className={css.customDropLi}>
        <p>При оформленні замовлення вказуєте «Дропшипінг».</p>
      </li>
      <li className={css.customDropLi}>
        <p>
          Створюєте в додатку Нова Пошта ТТН і вказуєте її в рядку ТТН при
          оформленні замовлення.
        </p>
      </li>
      <li className={css.customDropLi}>
        <p>
          Після оформлення замовлення з вами зв’язується менеджер для
          підтвердження.
        </p>
      </li>
      <li className={css.customDropLi}>
        <p>Тільки після підтвердження ви отримуєте рахунок на оплату.</p>
      </li>
    </ol>
  );
}
