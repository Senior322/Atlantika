import DiscountInfo from 'components/discountInfo/discountInfo';
import DiscountsHero from 'components/discoutsHero/discountsHero';
import Question from 'components/question/question';
import React from 'react';

export default function Discounts() {
  return (
    <>
      <DiscountsHero />
      <DiscountInfo/>
      <Question />
    </>
  );
}
