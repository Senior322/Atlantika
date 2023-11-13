import DropHero from 'components/DropHero/DropHero'
import DropInfo from 'components/dropInfo/DropInfo'
import NavigationWay from 'components/navigationWay/navigationWay'
import Question from 'components/question/question'
import React from 'react'

export default function Drop() {
  return (
    <>
     <NavigationWay/>
      <DropHero/>
      <DropInfo/>
      <Question/>
    </>
  )
}
