import FeedbackForm from '../FeedbackForm/FeedbackForm'
import style from './FeedbackSection.module.scss'
import image from '../../../assets/FeedbackIMG.png';

const FeedbackSection: React.FC = () => {
  return (
    <div className={style.feedback}>
      <div className={style.feedback__container}>
        <img className={style.feedback__image} src="../../../assets/FeedbackIMG.png" alt="aboba" />
        <div className={style.feedback__section}>
          <div className={style.feedback__desc}>
            <h3 className={style.feedbsck__title}>LET'S GET IN&nbsp;TOUCH</h3>
            <p className={style.feedback__suptitle}>Make orders, take part in promotions, recommend us to friends or connect </p>
          </div>
          <div className={style.feedback__form}>
            <FeedbackForm />
          </div>
        </div>

      </div>
    </div>
  )
}

export default FeedbackSection
