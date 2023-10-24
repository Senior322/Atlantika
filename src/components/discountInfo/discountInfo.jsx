import React from 'react';
import css from 'components/discountInfo/discountInfo.module.scss';
import { ReactComponent as SaleIcon } from 'assets/%.svg';

export default function DiscountInfo() {
  return (
    <section className={css.discountInfoSection}>
      <div className={css.discountInfoContainer}>
        <p className={css.discountInfoContainerP}>
          Ціни на сайті вказані з базовою знижкою <span className={css.discountInfoContainerPSpan}>25%.</span>
          <br /> На замовлення <span className={css.discountInfoContainerPSpan}>понад 10 000 грн</span> буде здійснено перерахунок за
          системою знижок!{' '}
        </p>
        <p className={css.discountInfoContainerP}>Мінімальна сума замовлення <span className={css.discountInfoContainerPSpan}>2500 грн.</span></p>
        <p className={css.discountInfoContainerP}>Система знижок:</p>
        <ul className={css.discountInfoContainerUl}>
         <li className={css.discountInfoContainerUlLi}><span className={css.discountInfoContainerUlLiSpan}><SaleIcon/></span><p>Знижка 25% від 2500 грн.;</p></li>
         <li className={css.discountInfoContainerUlLi}><span className={css.discountInfoContainerUlLiSpan}><SaleIcon/></span><p>Знижка 26% від 10 000 грн;</p></li>
         <li className={css.discountInfoContainerUlLi}><span className={css.discountInfoContainerUlLiSpan}><SaleIcon/></span><p>Знижка 27% від 20 000 грн;</p></li>
         <li className={css.discountInfoContainerUlLi}><span className={css.discountInfoContainerUlLiSpan}><SaleIcon/></span><p>Знижка 28% від 30 000 грн;</p></li>
         <li className={css.discountInfoContainerUlLi}><span className={css.discountInfoContainerUlLiSpan}><SaleIcon/></span><p>Знижка 29% від 40 000 грн;</p></li>
         <li className={css.discountInfoContainerUlLi}><span className={css.discountInfoContainerUlLiSpan}><SaleIcon/></span><p>Знижка 30% від 50 000 грн.</p></li>
        </ul>
        <p className={css.discountInfoContainerP}>*Підсумкова сума має бути такою, як зазначено вище, вже з урахуванням дисконту.</p>
      </div>
    </section>
  );
}
