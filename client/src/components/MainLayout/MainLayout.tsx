import Footer from '../Footer/Footer'
import FAQSection from './FAQSection/FAQSection'
import FeedbackSection from './FeedbackSection/FeedbackSection'
import style from './MainLayout.module.scss'
import tg from '../../assets/svg/TgSVG.svg'

const MainLayout: React.FC = () => {
  return (
    <div>
      <img src={tg} alt="aboba"/>
      <FAQSection />
      <FeedbackSection />
      <Footer />
    </div>
  )
}

export default MainLayout
