import DeliveryInfo from 'components/DeliveryInfo/DeliveryInfo';
import DeliveryHero from 'components/deliveryHero/DeliveryHero';
import NavigationWay from 'components/navigationWay/navigationWay';
import Question from 'components/question/question';
import React from 'react';

export default function Delivery() {
  return (
    <>
      <NavigationWay />
      <DeliveryHero/>
      <DeliveryInfo/>
      <Question />
    </>
  );
}
