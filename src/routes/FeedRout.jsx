import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Feed } from '../components/Main/Feed'

export const FeedRout = () => {
  return (
    <div className='routMix'>
        <Header />
        <div className='center'>
        <Feed />
        </div>
        <Footer />
    </div>
  )
}