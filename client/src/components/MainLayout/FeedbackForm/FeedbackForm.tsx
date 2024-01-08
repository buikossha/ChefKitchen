import style from './FeedbackForm.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IFeedbackFields } from '../../../types/data';

const FeedbackForm: React.FC = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<IFeedbackFields>();
  const onSubmit: SubmitHandler<IFeedbackFields> = (data) => {

  }

  return (
    <form className={style.feedback__form__form} onSubmit={handleSubmit(onSubmit)}>
      <div className={style.feedback__form__group}>
        <input placeholder="Your name" className={style.feedback__form__input} {...(register('name', {
          required: true
        }))} type="text" />
        <input placeholder="Your phone number" className={style.feedback__form__input} {...register('phone', {
          required: true
        })} type="text" />
      </div>
      <input placeholder="Your E-mail" className={style.feedback__form__input} {...register('email', {
        required: true
      })} type="text" />
      <div className={style.feedback__form__group}>
        <button className={style.feedback__form__button}>Make your choice</button>
        {/* <button className={style.feedback__form__tg}></button> */}
      </div>
    </form>
  )
}

export default FeedbackForm
