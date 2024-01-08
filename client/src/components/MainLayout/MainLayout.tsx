import Footer from '../Footer/Footer'
import FAQSection from './FAQSection/FAQSection'
import FeedbackSection from './FeedbackSection/FeedbackSection'
import style from './MainLayout.module.scss'

const MainLayout: React.FC = () => {
  return (
    <div>
      <FAQSection />
      <FeedbackSection />
      <Footer />
    </div>
  )
}

export default MainLayout
