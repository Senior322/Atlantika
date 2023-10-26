import React from 'react';
import css from 'components/aboutHero/aboutHero.module.scss';
import NavigationWay from 'components/navigationWay/navigationWay';

export default function AboutHero() {
  return (
    <section className={css.aboutHeroSection}>
      <NavigationWay/>
      <div className={css.aboutHeroContainer}>
        <div className={css.aboutHeroImage}></div>
        <div className={css.aboutInfoCintainer}>
          <h1 className={css.aboutTitle}>Про нас</h1>
          <p className={css.aboutP}>
            Атлантика – це компанія з ім'ям, яка успішно працює на території
            України понад 15 років. У нас працюють висококваліфіковані
            професіонали своєї справи.
          </p>
          <p className={css.aboutP}>
            Створюючи нашу компанію, ми ставили собі основне завдання –
            забезпечити спортсменів і просто людей, які ведуть активний і
            здоровий спосіб життя, високоякісним спортивним харчуванням, яке
            допоможе їм підвищити свої фізичні можливості та досягти найкращих
            результатів.
          </p>
          <p className={css.aboutP}>
            Ми підтримуємо імідж інноваційної компанії, постійно розширюємо
            асортимент представленої продукції, цікавимося новинками у світі
            спорту, які були б цікавими для українського ринку.
          </p>
          <p className={css.aboutP}>
            Атлантика надійний партнер та постачальник спортивного харчування
            для Вашого бізнесу!
          </p>
          <p className={css.aboutP}>
            Ми розвиваємось, чого і Вам бажаємо разом з нами.
          </p>
        </div>
      </div>
    </section>
  );
}
