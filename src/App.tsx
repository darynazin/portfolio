import './App.css'
import Experience from './components/Exporience/Experience'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Stack from './components/Stack/Stack'
import Projects from './components/Projects/Projects'
import SpaceBackground from './components/SpaceBackground/SpaceBackground'
import Contacts from './components/Contacts/Contacts'

function App() {

  return (
    <div className="layout-container">
      <SpaceBackground />
      <main className="main-container">
        <Header />
        <Hero />
        <Experience />
        <Stack />
        <Projects />
        <Contacts />
        <Footer />
      </main>
    </div>
  )
}

export default App
