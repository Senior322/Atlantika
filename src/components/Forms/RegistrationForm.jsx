import React from 'react';
import css from 'components/Forms/Forms.module.scss';

export default function RegistrationForm() {
  return (
    <section className={css.RegistrationFormSection}>
      <div className={css.RegistrationFormContainer}>
        <div className={css.RegistrationFormFirstItem}>
          <div className={css.RegistrationContactInfo}>
            <h2 className={css.RegistrationFormTitle}>
              Контактні дані представника
            </h2>
          </div>
          <div className={css.RegistrationFormAccount}>
            <h2 className={css.RegistrationFormTitle}>Обліковий запис</h2>
          </div>
        </div>
        <div className={css.RegistrationFormSecondItem}>
          <div className={css.RegistrationFormActivity}>
            <h2 className={css.RegistrationFormTitle}>Діяльність</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
