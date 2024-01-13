import React from 'react';
import css from 'components/Forms/Forms.module.scss';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import DefaultButton from 'components/defaultButton/defaultButton';
import { Link } from 'react-router-dom';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export default function PersonalOffice() {
  const BasicFormSchema = Yup.object().shape({
    email: Yup.string().email('Недійсна адреса').required('Обов*язково'),
    userName: Yup.string()
      .min(2, 'Повинен бути довшим за 2 символи')
      .max(20, 'Гарна спроба, ніхто не має такого довгого імені')
      .required('Обов*язково'),
    SurName: Yup.string()
      .min(2, 'Повинен бути довшим за 2 символи')
      .max(20, 'Гарна спроба, ніхто не має такого довгого імені')
      .required('Обов*язково'),
    telephoneNumber: Yup.string()
      .matches(phoneRegExp, 'Номер телефону недійсний')
      .required('Обов*язково'),
    agreed: Yup.boolean().oneOf([true], 'Надайте згоду'),
  });
  return (
    <section className={css.RegistrationFormSection}>
      <div className={css.RegistrationFormContainer}>
        <Formik
          initialValues={{
            userName: '',
            telephoneNumber: '',
            email: '',
            password: '',
            agreed: false,
          }}
          validationSchema={BasicFormSchema}
          onSubmit={async (values, action) => {
            await new Promise(r => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
            action.resetForm();
          }}
        >
          <Form className={css.formFrom}>
            <h2 className={css.RegistrationFormTitle}>
              Контактні дані представника
            </h2>
            <label htmlFor="userName">
              <div>
                <span className={css.formSpanInfo}>Ім’я</span>{' '}
                <span className={css.formSpan}>*</span>
              </div>
              <Field
                className={css.formInput}
                type="text"
                name="userName"
                placeholder="Ім'я отримувача"
              ></Field>
              <ErrorMessage name="userName" />
            </label>
            <label htmlFor="SurName">
              <span className={css.formSpanInfo}>Призвіще</span>{' '}
              <span className={css.formSpan}>*</span>
              <Field
                className={css.formInput}
                type="text"
                name="SurName"
                placeholder="Прізвище отримувача"
              ></Field>
              <ErrorMessage name="SurName" />
            </label>
            <label htmlFor="email">
              <span className={css.formSpanInfo}>E-mail</span>{' '}
              <span className={css.formSpan}>*</span>
              <Field
                className={css.formInput}
                type="email"
                name="email"
                placeholder="Для авторизації"
              ></Field>
              <ErrorMessage name="email" />
            </label>
            <label htmlFor="telephoneNumber">
              <span className={css.formSpanInfo}>Tелефон</span>{' '}
              <span className={css.formSpan}>*</span>
              <Field
                className={css.formInput}
                type="phone"
                name="telephoneNumber"
                placeholder="+38 (___) ___ __ __"
              ></Field>
              <ErrorMessage name="telephoneNumber" />
            </label>
            <div>
              <h2 className={css.RegistrationFormTitle}>зміна паролю</h2>
              <label htmlFor="Password">
                <span className={css.formSpanInfo}>старий пароль</span>{' '}
                <span className={css.formSpan}>*</span>
                <Field
                  className={css.formInput}
                  type="password"
                  name="password"
                  placeholder="От 4 до 20 символів"
                ></Field>
                <ErrorMessage name="password" />
              </label>
              <label htmlFor="Password">
                <span className={css.formSpanInfo}>новий пароль</span>{' '}
                <span className={css.formSpan}>*</span>
                <Field
                  className={css.formInput}
                  type="password"
                  name="password"
                  placeholder="От 4 до 20 символів"
                ></Field>
                <ErrorMessage name="password" />
              </label>
              <label htmlFor="Password">
                <span className={css.formSpanInfo}>повторіть пароль</span>{' '}
                <span className={css.formSpan}>*</span>
                <Field
                  className={css.formInput}
                  type="password"
                  name="password"
                  placeholder="От 4 до 20 символів"
                ></Field>
                <ErrorMessage name="password" />
              </label>
            </div>
            <div className={css.personalOficeDownButtonContainer}>
            <Link to="/Passwordchange">Забули пароль?</Link>
            <DefaultButton
              info={'зберегти зміни'}
              type={'submit'}
              className={css.questionFormBtnPersonalOffice}
            /></div>
          </Form>
        </Formik>
      </div>
    </section>
  );
}
