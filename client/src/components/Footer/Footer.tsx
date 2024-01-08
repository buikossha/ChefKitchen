import style from './Footer.module.scss'
import FooterLogoIMG from '../../assets/FooterLogo.png'
import TgSVG from '../../assets/svg/TgSVG.svg'
import InstagramSVG from '../../assets/svg/InstSVG.svg'
import FacebookSVG from '../../assets/svg/FacebookSVG.svg'
import { Link } from 'react-router-dom'
import FooterPlateIMG from '../../assets/FooterPlateIMG.png'
import FooterCirclesSVG from '../../assets/svg/FooterCirclesSVG.svg'

const Footer: React.FC = () => {
  return (
    <div className={style.footer}>
      <div className={style.footer__container}>
        <div className={style.footer__section}>
          <img src={FooterLogoIMG} alt="Logo" />
          <div className={style.footer__socials}>
            <img src={TgSVG} alt="telegram" />
            <img src={InstagramSVG} alt="instagram" />
            <img src={FacebookSVG} alt="facebook" />
          </div>
          <p className={style.footer__text}>Chef Kitchen 2023</p>
        </div>

        <div className={style.footer__section__row}>
          <div className={style.footer__links}>
            <Link className={style.footer__link} to="/">Menu</Link>
            <Link className={style.footer__link} to="/">Delivery</Link>
            <Link className={style.footer__link} to="/">FAQ</Link>
            <Link className={style.footer__link} to="/">Contacts</Link>
          </div>
          <div className={style.footer__links}>
            <Link className={style.footer__link__fade} to="/">Privacy Policy</Link>
            <Link className={style.footer__link__fade} to="/">Terms and Conditions</Link>
            <Link className={style.footer__link__fade} to="/">Terms and Conditions</Link>
          </div>
        </div>

        <div className={style.footer__section}>
          <div className={style.footer__info}>
            <p className={style.footer__link__bold}>Tbilisi, Georgia</p>
            <p className={style.footer__link__bold}>591902883 (9:00 - 18:00)</p>
            <p className={style.footer__link__bold}>info@chef-kitchen.com</p>
            <br />
            <p className={style.footer__link__fade}>Individual entrepreneur Nikita Mosin </p>
            <p className={style.footer__link__fade}>Identification Number: 302252210</p>
          </div>
        </div>
      </div>
      <img className={style.footer__plateIMG} src={FooterPlateIMG} alt="plate" />
      <img className={style.footer__plateIMG} src={FooterCirclesSVG} alt="circles"/>
    </div>
  )
}

export default Footer
