import axios from 'axios'
import { useEffect, useState } from 'react'
import { IFAQ } from '../../../types/data';
import FAQItem from '../FAQItem/FAQItem';
import FAQquestion from '../FAQquestion/FAQquestion';
import style from './FAQSection.module.scss'

const FAQSection: React.FC = () => {

  const [faq, setFaq] = useState<IFAQ[]>([]);

  useEffect(() => {
    const getFaqInfo = async () => {
      try {
        const response = await axios.get("http://localhost:3001/faq")
        setFaq(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getFaqInfo();
  }, [])

  const [showQuestions, setShowQuestions] = useState<number>(1)
  const changeStatus = (id: number) => {
    setShowQuestions(id)
    console.log(showQuestions)
  }

  return (
    <div className={style.faq}>
      <div className={style.faq__container}>
        <h3 className={style.faq__title}>FAQ</h3>
        <div className={style.faq__questions}>
          {faq?.map((faq: IFAQ) => <FAQItem key={faq.id} faq={faq} changeStatus={changeStatus} showQuestions={showQuestions} />)}
        </div>
        {
          faq?.map((faq) => faq.id === showQuestions && faq.questions?.map((el) => (
            <FAQquestion question={el} />
          )))
        }
      </div>
    </div>
  )
}

export default FAQSection
