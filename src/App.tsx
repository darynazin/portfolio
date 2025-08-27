import './App.css'
import Experience from './components/Exporience/Experience'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Stack from './components/Stack/Stack'
import Projects from './components/Projects/Projects'
import Contacts from './components/Contacts/Contacts'
import Layout from './components/Layout/Layout'

function App() {

  return (
      <Layout>
      <Header />
      <Hero />
      <Experience />
      <Stack />
      <Projects />
      <Contacts />
    </Layout>
  )
}

export default App
