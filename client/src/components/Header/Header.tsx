import { Link } from 'react-router-dom';
import style from './Header.module.scss';
import HeaderLogo from '../../assets/HeaderLogo.png'
import HeaderPhone from '../../assets/svg/HeaderPhoneSVG.svg'

const Header: React.FC = () => {
  return (
    <div className={style.header}>
      <div className={style.header__container}>
        <img className={style.header__logo} src={HeaderLogo} alt="logo" />
        <div className={style.header__links}>
          <Link to="/">Menu</Link>
          <Link to="/">Delivery</Link>
          <Link to="/">FAQ</Link>
          <Link to="/">Contact</Link>
        </div>
        <div className={style.header__phoneinfo}>
          <img src={HeaderPhone} alt="phone" />
          <p className={style.header__number}>591 902 883</p>
        </div>
        <button className={style.header__signbutton}>sign in</button>
      </div>
    </div>
  )
}

export default Header

