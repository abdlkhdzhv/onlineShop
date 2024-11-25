
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Kinds from '../components/Main/Kinds'

export const KindsRout = () => {
  return (
    <div className='routMix'>
        <Header />
        <div className='center'>
        <Kinds />
        </div>
        <Footer />
    </div>
  )
}