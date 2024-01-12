import PersonalOffice from 'components/Forms/PersonalOffice'
import NavigationWay from 'components/navigationWay/navigationWay'
import React from 'react'
import { Link } from 'react-router-dom';

export default function PersonalOfficePage() {
  return (
    <>
    <NavigationWay/>
    <PersonalOffice/>
    <Link to="/Passwordchange">Забули пароль?</Link>
    </>
  )
}
