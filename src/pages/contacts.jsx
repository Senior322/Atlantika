import ContactsHero from 'components/contactsHero/ContactsHero'
import NavigationWay from 'components/navigationWay/navigationWay'
import Question from 'components/question/question'
import React from 'react'

export default function Contacts() {
  return (
    <>
    <NavigationWay/>
    <ContactsHero/>
      <Question/>
    </>
  )
}
