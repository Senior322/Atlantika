import React from 'react';
import css from 'components/PersonalOfficeInfo/PersonalOfficeInfo.module.scss';

export default function PersonalOfficeInfo() {
  return (
    <section className={css.personalOficeSection}>
      <div className={css.personalOficeContainer}>
        <h2 className={css.PersonalInfoTitle}>особистий кабінет</h2>
        <div className={css.navigationItem}>
          <button className={css.personalOficeButton}>Контактна інформація</button>
          <button className={css.personalOficeButton}>Історія замовлень</button>
          <button className={css.personalOfficeExitButton}>Вихід</button>
        </div>
      </div>
    </section>
  );
}
