import React from 'react';
// import css from 'components/questionForm/QuestionForm.module.scss';
import { Formik, Field, Form } from 'formik';

export default function QuestionForm() {
  return (
    <div>
      <Formik
        initialValues={{
          userName: '',
          telephoneNumber: '',
          email: '',
        }}
      >
        <Form>
          <div>
            <label htmlFor="userName">
              Ваше ім’я<span>*</span>
            </label>
            <Field type="text" name="userName" placeholder='Ігор'></Field>
          </div>
          <div>
            <label htmlFor="telephoneNumber">
              Ваш номер телефону<span>*</span>
            </label>
            <Field type="text" name="telephoneNumber" placeholder='+380 (50) 777 74 56'></Field>
          </div>
          <div>
            <label htmlFor="email">
              Ваш E-mail<span>*</span>
            </label>
            <Field type="text" name="Ваш E-mail" placeholder='Igor@gmail.com.ua'></Field>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
