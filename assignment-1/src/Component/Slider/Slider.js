import React from 'react'

import './Slider.css';

import Guitar from '../../assets/images/guitarHeader3.jpeg';

function Slider() {
  return (
    <div className='playGuitar'>
        <div className='playGuitar__content'>
            <img className='playGuitar__img' src={Guitar} alt='Slider 1'/>
            <div className='playGuitar__text'>
                <h3>Play Guitar</h3>
            <span>
            Are you eager to learn how to play the acoustic guitar? <br/>
            Then you are on the right part of the internet. <br/>
            On this article, we will teach you <br/>
            the basics of playing the guitar <br/>
            and other important things to get you started<br/>
            what are you waiting for? Read on<br/>
            </span>
            </div>
        </div>
    </div>
  )
}

export default Slider