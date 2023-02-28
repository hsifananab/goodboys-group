import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Button from '../UI/Button/Button';

import ChevronPattern from '../../assets/images/svg/chevron-pattern.svg';
import { sendFeedback } from '../../fetch/telegram';

import './Feedback.scss';

// required fields --done
// phone preseet   --
// modal window    --
//

// const phoneRegExp =
//   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^([^0-9]*)$/, 'Имя не должно содержать цифры')
    .required(),
  email: yup.string().email().required(),
  phone: yup.string().required('A phone number is required'),
  message: yup.string(),
});

const Feedback = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    control,
  } = useForm({ mode: 'onBlur', resolver: yupResolver(schema) });

  const formSubmitHandler = ({ name, phone, email, message }) => {
    const request = `<b>‼️Заявка с сайта‼️</b>\n\n<b>Имя:</b> ${name} \n<b>Телефон:</b> ${phone} \n<b>Email:</b> ${email} \n\n<b>Сообщение:</b>\n<i>${message}</i> `;

    sendFeedback(request);
    reset();
  };

  return (
    <div>
      <img src={ChevronPattern} alt="" />
      <div className="feedback">
        <form
          className="feedback__form"
          onSubmit={handleSubmit(formSubmitHandler)}
        >
          <input
            className="feedback__input"
            placeholder="Имя"
            {...register('name', {
              required: 'Поле обязательно к заполнению',
              minLength: { value: 2, message: 'Минимум два символа' },
            })}
            aria-invalid={errors.name ? 'true' : 'false'}
          />
          <input
            type="email"
            className="feedback__input"
            placeholder="E-mail"
            {...register('email', {
              required: true,
            })}
            aria-invalid={errors.email ? 'true' : 'false'}
          />
          <input
            type="tel"
            className="feedback__input"
            placeholder="Телефон"
            {...register('phone', {
              required: true,
            })}
            aria-invalid={errors.phone ? 'true' : 'false'}
          />

          <textarea
            className="feedback__input"
            placeholder="Комментарий"
            {...register('message', {
              required: true,
            })}
            aria-invalid={errors.message ? 'true' : 'false'}
          />
        </form>
        <div className="feedback__info">
          <p className="feedback__text">
            Возникли вопросы или необходимо сделать расчет стоимости проекта?
            <br />
            <br />
            Заполните форму обратной связи и наш менеджер свяжется с вами.
          </p>
          <Button
            type="submit"
            form="feedback-form"
            onClick={handleSubmit(formSubmitHandler)}
          >
            отправить
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
