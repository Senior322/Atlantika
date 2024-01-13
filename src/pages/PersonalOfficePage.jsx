import PersonalOffice from 'components/Forms/PersonalOffice'
import PersonalOfficeInfo from 'components/PersonalOfficeInfo/PersonalOfficeInfo';
import NavigationWay from 'components/navigationWay/navigationWay'
import React from 'react'

export default function PersonalOfficePage() {
  return (
    <>
    <NavigationWay/>
    <PersonalOfficeInfo/>
    <PersonalOffice/>
    </>
  )
}
