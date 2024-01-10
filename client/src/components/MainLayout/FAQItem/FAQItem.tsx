import style from './FAQItem.module.scss'
import { IFAQ } from '../../../types/data'
import { useState } from 'react'
import FAQquestion from '../FAQquestion/FAQquestion'

interface FAQItemProps {
  faq: IFAQ;
  showQuestions: number;
  changeStatus: (id: number) => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ faq, changeStatus, showQuestions }) => {

  const createSvg = () => {
    return { __html: faq.svg };
  }

  return (
    <div onClick={() => changeStatus(faq.id)} className={showQuestions !== faq.id ? style.faqitem__container : style.faqitem__container__active}>
      <div className={style.faqitem__svg} dangerouslySetInnerHTML={createSvg()} />
      <p className={style.faqitem__title}>{faq.title}</p>
    </div>
  )
}

export default FAQItem
