import React from 'react';
import css from 'components/question/question.module.scss';
import QuestionForm from 'components/questionForm/QuestionForm';

export default function Question() {
  return (
    <section className={css.questionSection}>
      <div className={css.questionContainer}>
        <h2 className={css.questionTitle}>Виникли питання?</h2>
        <p className={css.questionText}>
          Якщо у вас виникли питання, ми обов'язково на все відповімо
        </p>
        <QuestionForm />
      </div>
    </section>
  );
}
