import React from 'react';
import css from 'components/dropInfo/dropInfo.module.scss';

export default function DropInfo() {
  return (
    <section className={css.dropInfoSection}>
      <div className={css.dropInfoContainer}>
        <p className={css.dropInfoContainerP}>
          <span className={css.dropInfoContainerPSpan}>Дропшипінг</span> – це
          система співпраці без закупівлі товару. Вона складається з трьох
          елементів: постачальник => дропшипер => покупець. Покупець звертається
          до дропшипера, той передає замовлення постачальнику, постачальник
          відправляє товар безпосередньо замовнику.
        </p>
        <ol className={css.dropInfoContainerOl}>
          <li>Робите замовлення на сайті.</li>
          <li>При оформленні замовлення вказуєте «Дропшипінг».</li>
          <li>
            Створюєте в додатку Нова Пошта ТТН і вказуєте її в рядку ТТН при
            оформленні замовлення.
          </li>
          <li>
            Після оформлення замовлення з вами зв’язується менеджер для
            підтвердження.
          </li>
          <li>Тільки після підтвердження ви отримуєте рахунок на оплату.</li>
        </ol>
        <h2 className={css.dropInfoContainerTitle}>Умови співпраці</h2>
        <div className={css.dropUnderTitleBox}>
          <p>Знижка по системі дропшипінг 25%.</p>
          <p>Мінімальних замовлень немає.</p>
          <p>Дотримуйтесь рекомендованих роздрібних цін.</p>
        </div>
        <h2 className={css.dropInfoContainerTitle}>Доставка</h2>
        <div className={css.dropUnderTitleBox}>
          <p>Відправка виключно Новою Поштою з відділення №243 міста Києва.</p>
          <p>
            Відправки з Пн. – Пт. Машина виїжджає після 16:00 на відділення
            Нової Пошти.
          </p>
          <p>
            Відправка здійснюється за вашою ТТН, в якій ви вказуєте себе
            відправником, в цьому випадку ви можете відправляти замовлення
            накладеним платежем.
          </p>
        </div>
        <h2 className={css.dropInfoContainerTitle}>Оплата</h2>
        <div className={css.dropUnderTitleBox}>
          <p>Відправка виключно Новою Поштою з відділення №243 міста Києва.</p>
          <p>
            Відправки з Пн. – Пт. Машина виїжджає після 16:00 на відділення
            Нової Пошти.
          </p>
          <p>
            Оплату всіх замовлень потрібно здійснити до 16:00, щоб посилки були
            відправленні в той же день.
          </p>
        </div>
      </div>
    </section>
  );
}
