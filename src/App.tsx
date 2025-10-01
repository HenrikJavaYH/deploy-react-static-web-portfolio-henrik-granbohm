import './App.css'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  return (
    <div className="portfolio">
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  )
}

export default App
