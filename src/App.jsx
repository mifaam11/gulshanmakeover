import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Services from './Components/Services/Services'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <Services />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
