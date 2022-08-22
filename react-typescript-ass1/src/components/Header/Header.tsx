
import React from 'react'
import './Header.css'
import Dafirm from '../../assets/images/dafirmlogo.png'

export const Header = () => {
    return(
        <div className='header__container'>
        <img className='Dafirm' src={Dafirm} alt='DafirmLogo'/>
        <div className ="nav__menu">
          <a className='active' href='#Header'>Home </a>
          <a className='active' href="#Blogs">Blogs</a>
          <a className='active' href="#Services">Services</a>
          <a className='active' href="#Tutorials">Tutorials</a>
          <a className='active' href="#Contact">Contact</a>
        </div>
    </div>

    )
}