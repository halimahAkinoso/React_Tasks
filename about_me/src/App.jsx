import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Skills from './Skills'
import Location from './Location'
import halimahImg from './assets/halimah image.jpg'

const App = () => {
  return (
    <div className="site-container">
      <header style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <img src={halimahImg} alt="Halimat" style={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover', display: 'inline-block' }} />
      </header>

      <Header />
      <Skills />
      <Location />
      <Footer />
    </div>
  )
}

export default App