import { Link } from 'react-router-dom';
import style from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <div className={style.header}>
      <div className={style.header__container}>
        <p className={style.header__logo}>LOGO</p>
        <div className={style.header__links}>
          <Link to="/">Menu</Link>
          <Link to="/">Delivery</Link>
          <Link to="/">FAQ</Link>
          <Link to="/">Contact</Link>
        </div>
        <p className={style.header__number}>591 902 883</p>
        <button className={style.header__signbutton}>sign in</button>
      </div>
    </div>
  )
}

export default Header

