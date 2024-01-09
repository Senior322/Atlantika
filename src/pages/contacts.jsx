import ContactsHero from 'components/contactsHero/ContactsHero'
import ContactsInfo from 'components/contactsInfo/ContactsInfo'
import NavigationWay from 'components/navigationWay/navigationWay'
import Question from 'components/question/question'
import React from 'react'

export default function Contacts() {
  return (
    <>
    <NavigationWay/>
    <ContactsHero/>
    <ContactsInfo/>
      <Question/>
    </>
  )
}
