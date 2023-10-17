import React from 'react';
import css from 'components/questionForm/QuestionForm.module.scss';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import DefaultButton from 'components/defaultButton/defaultButton';
import * as Yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export default function QuestionForm() {
  const BasicFormSchema = Yup.object().shape({
    email: Yup.string().email('Недійсна адреса').required('Обов*язково'),
    userName: Yup.string()
      .min(2, 'Повинен бути довшим за 2 символи')
      .max(20, 'Гарна спроба, ніхто не має такого довгого імені')
      .required('Обов*язково'),
    telephoneNumber: Yup.string()
      .matches(phoneRegExp, 'Номер телефону недійсний')
      .required('Обов*язково'),
  });
  return (
    <div className={css.formContainer}>
      <Formik
        initialValues={{
          userName: '',
          telephoneNumber: '',
          email: '',
        }}
        validationSchema={BasicFormSchema}
        onSubmit={async (values, action) => {
          await new Promise(r => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
          action.resetForm();
        }}
      >
        <Form className={css.formFrom}>
          <div className={css.formFirstItems}>
            <label htmlFor="userName">
              <span className={css.formSpanInfo}>Ваше ім’я</span>{' '}
              <span className={css.formSpan}>*</span>
              <Field
                className={css.formInput}
                type="text"
                name="userName"
                placeholder="Ігор"
              ></Field>
              <ErrorMessage name="userName" />
            </label>
            <label htmlFor="telephoneNumber">
              <span className={css.formSpanInfo}>Ваш номер телефону</span>{' '}
              <span className={css.formSpan}>*</span>
              <Field
                className={css.formInput}
                type="phone"
                name="telephoneNumber"
                placeholder="+380 (50) 777 74 56"
              ></Field>
              <ErrorMessage name="telephoneNumber" />
            </label>
            <label htmlFor="email">
              <span className={css.formSpanInfo}>Ваш E-mail</span>{' '}
              <span className={css.formSpan}>*</span>
              <Field
                className={css.formInput}
                type="email"
                name="email"
                placeholder="Igor@gmail.com.ua"
              ></Field>
              <ErrorMessage name="email" />
            </label>
          </div>
          <div className={css.border}></div>
          <div>
            <p className={css.formText}>
              Надсилаючи цю форму, я даю згоду на обробку моїх даних згідно з
              угодою про конфіденційність та відповідно до Положення та закону
              про захист даних.
            </p>
            <div className={css.confirmContainer}>
              <label className={css.confirmContainerLabel}>
                <input type="checkbox" />
                <div className={css.checkMark}></div>
              </label>
              <p className={css.confirm}>я даю згоду</p>
            </div>
            <DefaultButton
              info={'надіслати'}
              type={'submit'}
              className={css.questionFormBtn}
            />
          </div>
        </Form>
      </Formik>
    </div>
  );
}
