import React from 'react';
import css from 'components/Forms/Forms.module.scss';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import DefaultButton from 'components/defaultButton/defaultButton';

export default function PasswordChangeForm() {
  const BasicFormSchema = Yup.object().shape({
    userName: Yup.string()
      .min(2, 'Повинен бути довшим за 2 символи')
      .max(20, 'Гарна спроба, ніхто не має такого довгого імені')
      .required('Обов*язково'),
  });
  return (
    <section>
      <div className={css.RegistrationFormContainer}>
        <h2 className={css.passwordTitle}>Зміна паролю</h2>
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
          {({ errors, touched }) => (
            <Form className={css.formFrom}>
              <div className={css.RegistrationFormAccount}>
                <label htmlFor="Password">
                  <span className={css.formSpanInfo}>Новий пароль</span>{' '}
                  <span className={css.formSpan}>*</span>
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
                <label htmlFor="Password">
                  <span className={css.formSpanInfo}>Повторіть пароль </span>{' '}
                  <span className={css.formSpan}>*</span>
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
              </div>
              <DefaultButton
                info={'зберегти зміни'}
                type={'submit'}
                className={css.questionFormBtn}
              />
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}
