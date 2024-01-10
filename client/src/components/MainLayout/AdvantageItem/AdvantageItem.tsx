import { IAdvantage } from '../../../types/data'
import style from './AdvantageItem.module.scss'

interface AdItemProps {
  ad: IAdvantage,
}

const AdvantageItem: React.FC<AdItemProps> = ({ ad }) => {
  return (
    <div className={style.ad__item}>
      <div className={style.ad__item__svg}></div>
      <p className={style.ad__item__title}>{ad.title}</p>
      <p className={style.ad__ietm__desc}>{ad.description}</p>
    </div>
  )
}

export default AdvantageItem
