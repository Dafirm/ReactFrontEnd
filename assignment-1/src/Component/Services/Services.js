import React from 'react'
 import './Services.css';
function Service() {
  return (
    <div className="card">
         <h3>Services</h3>
       <div className="card__content">
       <div className="card__content__details">
         <h4>Sales</h4>
         <p>
           We offer sales of all kinds of musical instruments <br/>
           at an affordable price, visit us today
         </p>
         <button><a href="">Learn more</a></button>
       </div>
       <div className="card__content__details">
         <h4>Tutorial</h4>
         <p>
           We are best at teaching you any kind  <br/>
           musical instrument of your choice and passion.
         </p>
         <button><a href="">Learn more</a></button>
       </div>
       <div className="card__content__details">
         <h4>Repairs</h4>
         <p>
           We repair all kinds of musical instruments <br/>
           perfectly at an affordable price!!
         </p>
         <button><a href="">Learn more</a></button>
       </div>
       </div>
       </div>

  )
}

export default Service