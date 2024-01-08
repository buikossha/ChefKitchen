import axios from 'axios'
import { useEffect, useState } from 'react'
import { IFAQ } from '../../../types/data';
import FAQItem from '../FAQItem/FAQItem';
import style from './FAQSection.module.scss'

const FAQSection: React.FC = () => {

  const [faq, setFaq] = useState<IFAQ[]>([]);

  useEffect(() => {
    const getFaqInfo = async () => {
      const response = await axios.get("http://localhost:3001/faq")
      setFaq(response.data)
      console.log(faq);
    }
    getFaqInfo();
  }, [])

  return (
    <div className={style.faq}>
      <div className={style.faq__container}>
        <h3 className={style.faq__title}>FAQ</h3>
        <div className={style.faq__questions}>
          {faq?.map((faq: IFAQ) => <FAQItem faq={faq} />)}
        </div>
      </div>
    </div>
  )
}

export default FAQSection
