import React from 'react';
import css from 'components/DropHero/dropHero.module.scss';

export default function DropHero() {
  return (
    <section className={css.dropHeroSection}>
      <div className={css.dropHeroContainer}>
         <h1 className={css.dropHeroContainerTitle}>Дропшипінг</h1>

      </div>
    </section>
  );
}
