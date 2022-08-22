import React from 'react'
import './Footer.css'
import facebook from '../../assets/images/facebook.png';
import whatsapp from '../../assets/images/whatsapp.png';
import instagram from '../../assets/images/instagram.jpeg';

function Footer() {
  return (
    <div>
    <footer className="footer">
     <h5>follow us on</h5>
     <div className="socials">
       <a  className="facebook icon" href="https://m.me/phemmy.oyeniyi " target='_blank'><img  src={facebook} alt = "facebook"/>
       </a>
       <a className="whatsapp icon" href="https://wa.me/+358442388567" target='_blank'><img  src={whatsapp} alt = "whatsapp"/>
       </a>
       <a className="instagram icon" href="https://m.me/phemmy.oyeniyi" target='_blank' ><img src={instagram} alt = "instagram"/>
       </a>
      </div>
      <h6>Copyright 2022 by Femi Oyeniyi</h6>
   </footer>
    </div>
  )
}

export default Footer
