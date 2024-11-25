
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Feeders } from '../components/Main/Feeders'

export const FeedersRout = () => {
  return (
    <div className='routMix'>
        <Header />
        <div className='center'>
        <Feeders />
        </div>
        <Footer />
    </div>
  )
}