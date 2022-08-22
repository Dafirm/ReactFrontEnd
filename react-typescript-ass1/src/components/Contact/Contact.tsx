import React from 'react'
import './Contact.css'


function Contact() {
  return (
    <div>

   <div id ="Contact"className="contact">
     <h3>Contact Us</h3>
   <div className="contact__form">

   <form>
    <input type="text" name='name' placeholder='Your Full Name' required />
    <input type='email' name='email' placeholder='Your Email' required />
    <textarea name='message'  placeholder='Your Message' required></textarea>
    <button type='submit' className='Sendbtn'>Send Message</button>
  </form>
  </div>
   </div>
    </div>
  )
}

export default Contact