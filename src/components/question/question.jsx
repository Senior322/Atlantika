import React from 'react';
import css from 'components/question/question.module.scss';
// import { Formik } from 'formik';

export default function Question() {
  return (
    <section className={css.questionSection}>
      <div className={css.questionContainer}>
        <h2 className={css.questionTitle}>Виникли питання?</h2>
        <p className={css.questionText}>
          Якщо у вас виникли питання, ми обов'язково на все відповімо
        </p>
      </div>
    </section>
  );
}
