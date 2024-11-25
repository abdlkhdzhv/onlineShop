
import Header from '../components/Header/Header'
import Mixes from '../components/Main/Mixes'
import Footer from '../components/Footer/Footer'

export const MixesRout = () => {
  return (
    <div className='routMix'>
        <Header />
        <div className='center'>
        <Mixes />
        </div>
        <Footer />
    </div>
  )
}
