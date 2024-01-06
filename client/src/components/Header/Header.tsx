import style from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <div className={style.header}>
      <div className={style.header__container}>
        <p className={style.header__title}>eto header!</p>
      </div>
    </div>
  )
}

export default Header

