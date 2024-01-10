import style from './FeedbackForm.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IFeedbackFields } from '../../../types/data';
import ButtonTg from '../../../assets/svg/ButtonTg.svg'

const FeedbackForm: React.FC = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<IFeedbackFields>();
  const emailReg: RegExp = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$/;
  const phoneReg: RegExp = /^[0-9\-\+]{9,15}$/;
  const nameReg: RegExp = /[a-zA-Z]+/;
  const onSubmit: SubmitHandler<IFeedbackFields> = (data) => {
  }

  return (
    <>
      <form className={style.feedback__form__form} onSubmit={handleSubmit(onSubmit)}>
        <div className={style.feedback__form__group}>
          <input placeholder="Your name" className={style.feedback__form__input} {...(register('name', {
            required: true,
            pattern: nameReg,
          }))} type="text" />
          <input placeholder="Your phone number" className={style.feedback__form__input} {...register('phone', {
            required: true,
            pattern: phoneReg,
          })} type="text" />
        </div>
        <input placeholder="Your E-mail" className={style.feedback__form__input} {...register('email', {
          required: true,
          pattern: {
            value: emailReg,
            message: 'Not valid email'
          },
        })} type="text" />
        <div className={style.feedback__form__group}>
          <button type="submit" className={style.feedback__form__button}>Make your choice</button>
          <button type="button" className={style.feedback__form__tg}>
            <img src={ButtonTg} alt="tg"/>
            <p className={style.feedback__form__tg__text}>Telegram</p>
          </button>
        </div>
      </form>
    </>
  )
}

export default FeedbackForm
