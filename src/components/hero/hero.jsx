import React from 'react';
import css from './hero.module.scss';
import BigLogoo from 'components/BigLogo/bigLogo';
import RegistrationBtn from 'components/registrationBtn/RegistrationBtn';

export default function Hero() {
  return (
    <section className={css.heroSection}>
      <div className={css.heroContainer}>
      <BigLogoo />
      <div className={css.textAndBtn}>
      <p className={css.heroContainerText}>
        Це платформа для оптових замовлень спортивного харчування та аксесуарів.
        Дана платформа призначена: для магазинів спортивного харчування,
        інтернет-магазинів, фітнес клубів, барів, тренерів.
      </p>
      <p className={css.heroContainerText}>
        Ваш надійний партнер та постачальник спортивного харчування для Вашого
        бізнесу!
      </p>
      <RegistrationBtn />
      </div>
      </div>
    </section>
  );
}
