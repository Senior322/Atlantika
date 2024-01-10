import React from 'react';
import css from 'components/RegistrationInfo/RegistrationInfo.module.scss';

export default function RegistrationInfo() {
  return (
    <section className={css.registrationInfoSection}>
      <div className={css.registrationInfoContainer}>
        <h2 className={css.registrationInfoTitle}>Швидка реєстрація</h2>
        <p className={css.registrationFirstP}>
          Якщо ви зареєстровані, увійдіть до системи
        </p>
        <p className={css.registrationSecondP}>
          Створення облікового запису допоможе робити покупки швидше та
          зручніше. Ви також зможете відстежувати статус замовлення,
          користуватися закладками, бачити свої попередні замовлення або
          отримати знижку як наш постійний покупець
        </p>
      </div>
    </section>
  );
}
