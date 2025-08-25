import './App.css'
import Experience from './components/Exporience/Experience'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Stack from './components/Stack/Stack'
import Projects from './components/Projects/Projects'
import Contacts from './components/Contacts/Contacts'

function App() {

  return (
    <div className="layout-container">
      <main className="main-container">
        <Header />
        <Hero />
        <Experience />
        <Stack />
        <Projects />
        <Contacts />
      </main>
    </div>
  )
}

export default App
