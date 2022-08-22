import './App.css'
import './index.css'
import React from 'react'

import {Header }from './components/Header/Header'
import Slider from './components/Slider/Slider'
import Services from './components/Services/Services'
import Partners from './components/Partners/Partners'
import Line from './components/Line/Line'
import Blogs from './components/Blogs/Blogs'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App () {
  return (
    <div>
      <Header />
      <Slider />
      <Services />
      <Line />
      <Partners />
      <Line />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
