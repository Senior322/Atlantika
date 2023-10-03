import React from 'react';
import css from 'components/provider/provider.module.scss';

export default function Provider() {
  return (
    <section className={css.providerSection}>
      <div className={css.providerContainer}>
        <h2 className={css.providerTitle}>Будь серед своїх!</h2>
        <p className={css.providerText}>
          Ваш надійний партнер та постачальник спортивного харчування для Вашого
          бізнесу!
        </p>
        {/* button here  */}
      </div>
    </section>
  );
}
