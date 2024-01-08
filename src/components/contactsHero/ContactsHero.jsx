import React from 'react'
import css from 'components/contactsHero/ContactsHero.module.scss'

export default function ContactsHero() {
  return (
    <section className={css.ContactsHeroSection}>
      <div className={css.ContactsHeroContainer}>
         <h2 className={css.ContactsHeroTitle}>Де нас знайти</h2>
      </div>
    </section>
  )
}
