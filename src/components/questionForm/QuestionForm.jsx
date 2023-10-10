import React from 'react';
import css from 'components/questionForm/QuestionForm.module.scss';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import DefaultButton from 'components/defaultButton/defaultButton';
import * as Yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export default function QuestionForm() {
  const BasicFormSchema = Yup.object().shape({
    email: Yup.string()
      //Проверяем, корректный ли адрес.
      //Если нет, то выводится сообщение в скобках
      .email('Невалідна адреса')
      //не сабмитим, если поле не заполнено
      .required('Required'),
    userName: Yup.string()
      //минимальная длина - 2 символа
      .min(2, 'Must be longer than 2 characters')
      //максимальная длина - 20 символов
      .max(20, 'Nice try, nobody has a first name that long')
      .required('Required'),
    telephoneNumber: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .required('Required'),
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
          <label htmlFor="userName">
            Ваше ім’я <span className={css.formSpan}>*</span>
            <Field
              className={css.formInput}
              type="text"
              name="userName"
              placeholder="Ігор"
            ></Field>
            <ErrorMessage name="userName" />
          </label>
          <label htmlFor="telephoneNumber">
            Ваш номер телефону <span className={css.formSpan}>*</span>
            <Field
              className={css.formInput}
              type="phone"
              name="telephoneNumber"
              placeholder="+380 (50) 777 74 56"
            ></Field>
            <ErrorMessage name="telephoneNumber" />
          </label>
          <label htmlFor="email">
            Ваш E-mail <span className={css.formSpan}>*</span>
            <Field
              className={css.formInput}
              type="email"
              name="email"
              placeholder="Igor@gmail.com.ua"
            ></Field>
            <ErrorMessage name="email" />
          </label>
          <div>
            <div className={css.border}></div>
            <p className={css.formText}>
              Надсилаючи цю форму, я даю згоду на обробку моїх даних згідно з
              угодою про конфіденційність та відповідно до Положення та закону
              про захист даних.
            </p>
            <p className={css.confirm}>я даю згоду</p>
            <DefaultButton info={'надіслати'} type={'submit'} />
          </div>
        </Form>
      </Formik>
    </div>
  );
}
