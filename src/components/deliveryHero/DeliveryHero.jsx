import React from 'react'
import css from 'components/deliveryHero/DeliveryHero.module.scss'

export default function DeliveryHero() {
  return (
    <section className={css.deliveryHeroSection}>
      <div className={css.deliveryHeroContainer}>  
      <h1 className={css.deliveryHeroTitle}>Доставка і оплата</h1>
      </div>
    </section>
  )
}
