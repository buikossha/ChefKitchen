import React from 'react'
import style from './IntroSection.module.scss'
import introImage from '../../../assets/IntroIMG.png'
import introLeaves1 from '../../../assets/IntroLeavesIMG1.png'
import introLeaves2 from '../../../assets/IntroLeavesIMG2.png'
import introLeaves3 from '../../../assets/IntroLeavesIMG3.png'
import introPeppercorns from '../../../assets/IntroPeppercornsIMG.png'


const IntroSection: React.FC = () => {
  return (
    <div className={style.intro}>
      <div className={style.intro__container}>
      <div className={style.intro__information}>
        <h1 className={style.intro__h1}>Your personal cook</h1>
        <span className={style.intro__span}>The balanced diet for every day</span>
        <button className={style.intro__button}>Make your choice</button>
      </div>
      <img className={style.intro__image} src={introImage} alt="breakfast" />
      <img className={style.intro__image__leaves__1} src={introLeaves1} alt="leaves_1" />
      <img className={style.intro__image__leaves__2} src={introLeaves2} alt="leaves_2" />
      <img className={style.intro__image__leaves__3} src={introLeaves3} alt="leaves_3" />
      <img className={style.intro__image__pepper__corns} src={introPeppercorns} alt="pepper corns" />
        <div className={style.intro__img}></div>
        </div>
    </div>
  )
}

export default IntroSection