import React from 'react';
import css from 'components/questionForm/QuestionForm.module.scss';
import { Formik, Field, Form } from 'formik';
import DefaultButton from 'components/defaultButton/defaultButton';
import * as Yup from 'yup';

export default function QuestionForm() {
   const BasicFormSchema = Yup.object().shape({
      email: Yup.string()
        //Проверяем, корректный ли адрес.
        //Если нет, то выводится сообщение в скобках
        .email("Invalid email address")
        //не сабмитим, если поле не заполнено
        .required("Required"),
      userName: Yup.string()
        //минимальная длина - 2 символа
        .min(2, "Must be longer than 2 characters")
        //максимальная длина - 20 символов
        .max(20, "Nice try, nobody has a first name that long")
        .required("Required"),
      
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
      >
         
        <Form>
          <div>
            <label htmlFor="userName">
              Ваше ім’я <span className={css.formSpan}>*</span>
            </label>
            <Field className={css.formInput} type="text" name="userName" placeholder="Ігор"></Field>
          </div>
          <div>
            <label htmlFor="telephoneNumber">
              Ваш номер телефону <span className={css.formSpan}>*</span>
            </label>
            <Field className={css.formInput}
              type="text"
              name="telephoneNumber"
              placeholder="+380 (50) 777 74 56"
            ></Field>
          </div>
          <div>
            <label htmlFor="email">
              Ваш E-mail <span className={css.formSpan}>*</span>
            </label>
            <Field className={css.formInput}
              type="text"
              name="Ваш E-mail"
              placeholder="Igor@gmail.com.ua"
            ></Field>
          </div>
        </Form>
      </Formik>
      <div className={css.border}></div>
      <p className={css.formText}>
        Надсилаючи цю форму, я даю згоду на обробку моїх даних згідно з угодою
        про конфіденційність та відповідно до Положення та закону про захист
        даних.
      </p>
      <p className={css.confirm}>я даю згоду</p>
      <DefaultButton info={'надіслати'} type={'submit'}/>
    </div>
  );
}
