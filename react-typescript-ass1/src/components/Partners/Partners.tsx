import React from 'react'
import './Partners.css'

import behringer from '../../assets/images/behringer.png';
import gibson from '../../assets/images/gibson.png';
import ibanez from '../../assets/images/ibanez.png';
import pearl from '../../assets/images/pearl.png';
import tama from '../../assets/images/tama.png';
import yamaha from '../../assets/images/yamaha.png';
import squier from '../../assets/images/squierlogo.png';
import fender from '../../assets/images/fenderlogo.jpeg';

function Partners () {
  return (
    <div className="client">
    <h3>Our Partners</h3>
    <div className="client__logo" >
      <img className="card__logo--img"src= {behringer} alt = "behringer banner"/>
      <img className="card__logo--img"src= {gibson} alt = "gibson banner"/>
      <img className="card__logo--img"src= {ibanez} alt = "ibanez banner"/>
      <img className="card__logo--img"src= {pearl} alt = "pearl banner"/>
      <img className="card__logo--img"src= {tama} alt = "tama banner"/>
      <img className="card__logo--img"src= {yamaha} alt = "yamaha banner"/>
      <img className="card__logo--img"src= {squier} alt = "squier banner"/>
      <img className="card__logo--img"src= {fender} alt = "fender banner"/>
    </div>
  </div>
  )
}

export default Partners
