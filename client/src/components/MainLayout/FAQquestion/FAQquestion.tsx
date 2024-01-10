import { IQuestions } from '../../../types/data'
import style from './FAQquestion.module.scss'

interface FAQquestionProps {
  question: IQuestions,
}

const FAQquestion: React.FC<FAQquestionProps> = ({ question }) => {
  return (
    <div className={style.faq__question}>
      <p className={style.faq__question__title}>
        {question.question}
      </p>
      <p className={style.faq__question__answ}>
        {question.answer}
      </p>
    </div>
  )
}

export default FAQquestion
