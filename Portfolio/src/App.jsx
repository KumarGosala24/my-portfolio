import React from 'react'
import Header from './components/Header'
import './App.css'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App