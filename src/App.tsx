import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import SpaceBackground from './components/SpaceBackground/SpaceBackground'

function App() {

  return (
    <div className="layout-container">
      <SpaceBackground />
      <main className="main-container">
        <Header />
        <Hero />
        <Footer />
      </main>
    </div>
  )
}

export default App
