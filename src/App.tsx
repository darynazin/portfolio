import "./styles/main.scss";
import Experience from './components/Exporience/Experience'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Stack from './components/Stack/Stack'
import Projects from './components/Projects/Projects'
import Contacts from './components/Contacts/Contacts'
import Layout from './components/Layout/Layout'
import Footer from './components/Footer/Footer'

function App() {

  return (
      <Layout>
      <Header />
      <Hero />
      <Experience />
      <Stack />
      <Projects />
      <Contacts />
      <Footer />
    </Layout>
  )
}

export default App
