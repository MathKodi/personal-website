import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import SoftSkills from './components/Skills/SoftSkills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <div className='skills-container'>
          <SoftSkills />
        </div>
      </main>
    </div>
  )
}

export default App
