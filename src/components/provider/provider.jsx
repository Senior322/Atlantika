import React from 'react';
import css from 'components/provider/provider.module.scss';
import DefaultButton from 'components/defaultButton/defaultButton';

export default function Provider() {
  return (
    <section className={css.providerSection}>
      <div className={css.providerContainer}>
        <h2 className={css.providerTitle}>Будь серед своїх!</h2>
        <p className={css.providerText}>
          Ваш надійний партнер та постачальник спортивного харчування для Вашого
          бізнесу!
        </p>
        <DefaultButton info={'стати своїм'} width={'209.4px'} height={'58px'} type={'button'}/>
      </div>
    </section>
  );
}
