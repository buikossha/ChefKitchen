import Footer from '../Footer/Footer'
import FAQSection from './FAQSection/FAQSection'
import FeedbackSection from './FeedbackSection/FeedbackSection'
import style from './MainLayout.module.scss'
import IntroSection from './FirstSection/IntroSection'
import OurMenu from './OurMenu/OurMenu'
import AdvantagesSection from './AdvantagesSection/AdvantagesSection'

const MainLayout: React.FC = () => {
  return (
    <div>
      <IntroSection />
      <OurMenu />
      <AdvantagesSection />
      <FAQSection />
      <FeedbackSection />
      <Footer />
    </div>
  )
}

export default MainLayout
