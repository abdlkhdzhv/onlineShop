import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx'
import styles from './App.module.css'
import Footer from './components/Footer/Footer.jsx'

function App() {

  return (
    <div className={styles.wrapApp}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App