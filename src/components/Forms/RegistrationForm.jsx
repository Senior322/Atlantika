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
      .max(20, 'Гарна спроба, ніхто не має такого довгого призвіща')
      .required('Обов*язково'),
    telephoneNumber: Yup.string()
      .matches(phoneRegExp, 'Номер телефону недійсний')
      .required('Обов*язково'),
    agreed: Yup.boolean().oneOf([true], 'Надайте згоду'),
    password: Yup.string()
      .min(4, 'Повинен бути довшим за 4 символи')
      .max(30, 'Пароль занадто довгий'),
    city: Yup.string()
      .min(2, 'Повинен бути довшим за 2 символи')
      .max(20, 'Гарна спроба, таких міст немає')
      .required('Обов*язково'),
    address: Yup.string()
      .min(2, 'Повинен бути довшим за 2 символи')
      .max(30, 'Занадто довга адреса')
      .required('Обов*язково'),
    company: Yup.string()
      .min(1, 'Повинен бути довшим за 1 символ')
      .max(30, 'Занадто довга назва компанії')
      .required('Обов*язково'),
  });

  return (
    <section className={css.RegistrationFormSection}>
      <div className={css.RegistrationFormContainer}>
        <div className={css.RegistrationContactInfo}>
          <Formik
            initialValues={{
              userName: '',
              SurName: '',
              telephoneNumber: '',
              email: '',
              password: '',
              city: '',
              address: '',
              company: '',
              organization: '',
              area: '',
              notes: '',
              agreed: false,
            }}
            validationSchema={BasicFormSchema}
            onSubmit={async (values, action) => {
              await new Promise(r => setTimeout(r, 500));
              alert(JSON.stringify(values, null, 2));
              action.resetForm();
            }}
          >
            {({ errors, touched }) => (
              <Form className={css.formFrom}>
                <div className={css.RegistrationFormFirstItem}>
                  <div className={css.RegistrationFirstItemForm}>
                    <h2 className={css.RegistrationFormTitle}>
                      Контактні дані представника
                    </h2>
                    <label htmlFor="userName">
                      <div>
                        <span className={css.formSpanInfo}>Ім’я</span>{' '}
                        <span className={css.formSpan}>*</span>
                      </div>
                      <Field
                        className={
                          errors.SurName
                            ? css.formInput + ' ' + css.error
                            : css.formInput
                        }
                        type="text"
                        name="userName"
                        placeholder="Ім'я отримувача"
                      ></Field>
                      <ErrorMessage name="userName" />
                    </label>
                    <label htmlFor="SurName">
                      <div>
                        <span className={css.formSpanInfo}>Призвіще</span>{' '}
                        <span className={css.formSpan}>*</span>
                      </div>
                      <Field
                        className={
                          errors.SurName
                            ? css.formInput + ' ' + css.error
                            : css.formInput
                        }
                        type="text"
                        name="SurName"
                        placeholder="Прізвище отримувача"
                      ></Field>
                      <ErrorMessage name="SurName" />
                    </label>
                    <label htmlFor="telephoneNumber">
                      <div>
                        <span className={css.formSpanInfo}>Tелефон</span>{' '}
                        <span className={css.formSpan}>*</span>
                      </div>
                      <Field
                        className={
                          errors.SurName
                            ? css.formInput + ' ' + css.error
                            : css.formInput
                        }
                        type="phone"
                        name="telephoneNumber"
                        placeholder="+38 (___) ___ __ __"
                      ></Field>
                      <ErrorMessage name="telephoneNumber" />
                    </label>
                  </div>
                  <div className={css.RegistrationFormAccount}>
                    <h2 className={css.RegistrationFormTitle}>
                      Обліковий запис
                    </h2>
                    <label htmlFor="email">
                      <div>
                        <span className={css.formSpanInfo}>E-mail</span>{' '}
                        <span className={css.formSpan}>*</span>
                      </div>
                      <Field
                        className={
                          errors.SurName
                            ? css.formInput + ' ' + css.error
                            : css.formInput
                        }
                        type="email"
                        name="email"
                        placeholder="Для авторизації"
                      ></Field>
                      <ErrorMessage name="email" />
                    </label>
                    <label htmlFor="Password">
                      <div>
                        <span className={css.formSpanInfo}>Пароль</span>{' '}
                        <span className={css.formSpan}>*</span>
                      </div>
                      <Field
                        className={
                          errors.SurName
                            ? css.formInput + ' ' + css.error
                            : css.formInput
                        }
                        type="password"
                        name="password"
                        placeholder="От 4 до 20 символів"
                      ></Field>
                      <ErrorMessage name="password" />
                    </label>
                    <label htmlFor="RepeatPassword">
                      <div>
                        <span className={css.formSpanInfo}>
                          Повторіть пароль
                        </span>{' '}
                        <span className={css.formSpan}>*</span>
                      </div>
                      <Field
                        className={
                          errors.SurName
                            ? css.formInput + ' ' + css.error
                            : css.formInput
                        }
                        type="Password"
                        name="RepeatPassword"
                        placeholder="Повторіть пароль для перевірки"
                      ></Field>
                      <ErrorMessage name="password" />
                    </label>
                  </div>
                </div>
                <div className={css.RegistrationFormSecondItem}>
                  <div className={css.RegistrationFormActivity}>
                    <h2 className={css.RegistrationFormTitle}>Діяльність</h2>
                    <label htmlFor="city">
                      <div>
                        <span className={css.formSpanInfo}>Місто</span>{' '}
                        <span className={css.formSpan}>*</span>
                      </div>
                      <Field
                        className={
                          errors.SurName
                            ? css.formInput + ' ' + css.error
                            : css.formInput
                        }
                        type="text"
                        name="city"
                        placeholder="Місто доставки"
                      ></Field>
                      <ErrorMessage name="city" />
                    </label>
                    <label htmlFor="address">
                      <span className={css.formSpanInfo}>Адреса</span>{' '}
                      <Field
                        className={
                          errors.SurName
                            ? css.formInput + ' ' + css.error
                            : css.formInput
                        }
                        type="text"
                        name="address"
                        placeholder="Основна адреса доставки"
                      ></Field>
                      <ErrorMessage name="address" />
                    </label>
                    <label htmlFor="company">
                      <div>
                        <span className={css.formSpanInfo}>Компанія</span>{' '}
                        <span className={css.formSpan}>*</span>
                      </div>
                      <Field
                        className={
                          errors.SurName
                            ? css.formInput + ' ' + css.error
                            : css.formInput
                        }
                        type="text"
                        name="company"
                        placeholder="Назва компанії або магазина"
                      ></Field>
                      <ErrorMessage name="company" />
                    </label>
                    <label htmlFor="organization">
                      <span className={css.formSpanInfo}>Організація</span>{' '}
                      <Field
                        as="textarea"
                        className={css.formInput}
                        type="textarea"
                        name="organization"
                        placeholder="Юридична назва компанії або магазину (ФОП)"
                      ></Field>
                      <ErrorMessage name="organization" />
                    </label>
                    <label htmlFor="area">
                      <span className={css.formSpanInfo}>Сфера</span>{' '}
                      <Field
                        className={
                          errors.SurName
                            ? css.formInput + ' ' + css.error
                            : css.formInput
                        }
                        type="text"
                        name="area"
                        placeholder="Інше (вкажіть у примітці)"
                      ></Field>
                      <ErrorMessage name="area" />
                    </label>
                    <label htmlFor="notes">
                      <span className={css.formSpanInfo}>Примітки</span>{' '}
                      <Field
                        className={
                          errors.SurName
                            ? css.formInput + ' ' + css.error
                            : css.formInput
                        }
                        type="text"
                        name="notes"
                        placeholder="Інше"
                      ></Field>
                      <ErrorMessage name="notes" />
                    </label>
                    <div className={css.RegistrationFormConfirmContainer}>
                      <div
                        className={css.RegistrationFormConfirmAgreedInfoContainer}>
                        <div className={css.confirmContainer}>
                          <label className={css.confirmContainerLabel}>
                            <Field type="checkbox" name="agreed" />
                            <div className={css.checkMark}></div>
                            <ErrorMessage name="agreed" />
                          </label>
                          <p className={css.formText}>
                            Я даю згоду на обробку персональних даних
                          </p>
                        </div>
                      </div>
                      <div>
                        <DefaultButton
                          info={'Реєстрація'}
                          type={'submit'}
                          className={css.questionFormBtn}
                        />
                        <p className={css.downQuestion}>Вже зареєстровані?</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
}
