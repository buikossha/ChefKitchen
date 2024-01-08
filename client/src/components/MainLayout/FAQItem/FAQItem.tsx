import style from './FAQItem.module.scss'
import { IFAQ } from '../../../types/data'

interface FAQItemProps {
  faq: IFAQ;
}

const FAQItem: React.FC<FAQItemProps> = ({ faq }) => {
  return (
    <div className={style.faqitem__container}>
      <p>{faq.title}</p>
    </div>
  )
}

export default FAQItem
