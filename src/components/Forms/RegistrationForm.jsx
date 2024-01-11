import React from 'react';
import css from 'components/Forms/Forms.module.scss';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import DefaultButton from 'components/defaultButton/defaultButton';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export default function RegistrationForm() {
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
        <div className={css.RegistrationFormFirstItem}>
          <div className={css.RegistrationContactInfo}>
            <h2 className={css.RegistrationFormTitle}>
              Контактні дані представника
            </h2>
            <Formik
              initialValues={{
                userName: '',
                telephoneNumber: '',
                email: '',
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
                <div className={css.RegistrationFirstItemForm}>
                  <label htmlFor="userName">
                    <span className={css.formSpanInfo}>Ім’я</span>{' '}
                    <span className={css.formSpan}>*</span>
                    <Field
                      className={css.formInput}
                      type="text"
                      name="userName"
                      placeholder="Ім'я отримувача"
                    ></Field>
                    <ErrorMessage name="userName" />
                  </label>
                  <label htmlFor="telephoneNumber">
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
                </div>
                <div>
                  <p className={css.formText}>
                    Я даю згоду на обробку персональних даних
                  </p>
                  <div className={css.confirmContainer}>
                    <label className={css.confirmContainerLabel}>
                      <Field type="checkbox" name="agreed" />
                      <div className={css.checkMark}></div>
                      <p className={css.confirm}>я даю згоду</p>
                      <ErrorMessage name="agreed" />
                    </label>
                  </div>
                  <DefaultButton
                    info={'Реєстрація'}
                    type={'submit'}
                    className={css.questionFormBtn}
                  />
                </div>
              </Form>
            </Formik>
          </div>
          <div className={css.RegistrationFormAccount}>
            <h2 className={css.RegistrationFormTitle}>Обліковий запис</h2>
          </div>
        </div>
        <div className={css.RegistrationFormSecondItem}>
          <div className={css.RegistrationFormActivity}>
            <h2 className={css.RegistrationFormTitle}>Діяльність</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
