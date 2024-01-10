import style from './AdvantagesSection.module.scss'
import AdContainer from '../../../assets/AdContainer.png'
import AdVeg from '../../../assets/AdVeg.png'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { IAdvantage } from '../../../types/data'
import AdvantageItem from '../AdvantageItem/AdvantageItem'

const AdvantagesSection: React.FC = () => {
  const [advatages, setAdvantages] = useState<IAdvantage[]>([])
  useEffect(() => {
    const getAdvantages = async () => {
      try {
        const response = await axios.get('http://localhost:3001/advantages');
        setAdvantages(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getAdvantages()
  }, [])

  return (
    <div className={style.advantages}>
      <div className={style.advantages__container}>
        <h2 className={style.advantages__title}>Our advantages</h2>
        <div className={style.advatages__items}>
          {advatages?.map((el) => <AdvantageItem ad={el} key={el.id} />)}
        </div>
      </div>

      <div className={style.advanages__ad}>
        <div className={style.advanages__ad__container}>
          <div className={style.advantages__ad__text}>
            <h3 className={style.atvantages__ad__title}>1 day at the price&nbsp;of&nbsp;23$</h3>
            <p className={style.atvantages__ad__desc}>Make orders, take part in promotions, recommend us to friends or connect recommend us to friends or connect </p>
            <button className={style.advantages__ad__button}>Sing up</button>
          </div>
          <img className={style.container__img} src={AdContainer} alt="continer" />
          <img className={style.veg__img} src={AdVeg} alt="vegetables" />
        </div>
      </div>

    </div>
  )
}

export default AdvantagesSection
