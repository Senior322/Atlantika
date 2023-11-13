import React from 'react';
import css from 'components/discoutsHero/discoutsHero.module.scss';
import NavigationWay from 'components/navigationWay/navigationWay';

export default function DiscountsHero() {
  return (
    <section className={css.discountSection}>
      <div className={css.discountsContainer}>
         <NavigationWay/>
        <div className={css.discountHero}>
          <h1 className={css.discountHeroTitle}>Система знижок</h1>
        </div>
      </div>
    </section>
  );
}
