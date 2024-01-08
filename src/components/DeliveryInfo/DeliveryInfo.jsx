import React from 'react';
import css from 'components/DeliveryInfo/DeliveryInfo.module.scss';
import { ReactComponent as PlaceItem1 } from 'assets/navigationItem1.svg';

export default function DeliveryInfo() {
  return (
    <section className={css.DeliveryInfoSection}>
      <div className={css.DeliveryInfoContainer}>
        <div className={css.DeliveryFirstInfo}>
          <h2 className={css.DeliveryInfoTitle}>Способи оплати</h2>
          <p className={css.DeliveryInfoP}>
            Оплата здійснюється після підтвердження менеджером Вашого замовлення
            такими способами:
          </p>
          <p className={css.DeliveryInfoP}>
            Передплата на картку Приват банку, <br />
            Моно банку, <br />
            Розрахунковий рахунок.
          </p>
        </div>
        <div className={css.DeliverySecondInfo}>
          <h2 className={css.DeliveryInfoTitle}>Доставка</h2>
          <p className={css.DeliveryInfoP}>Доставка здійснюється Новою поштою за тарифами перевізника.</p>
          <p className={css.DeliveryInfoP}>Також можливий самовивіз у Києві за адресою:</p>
          <span className={css.DeliverySpan}> <PlaceItem1/>
            <p>Андрющенко 2/26</p>
          </span>
          <p className={css.DeliveryInfoP}>
            Надсилання товару протягом 1-2 днів з моменту підтвердження
            замовлення менеджером.
          </p>
        </div>
      </div>
    </section>
  );
}
