import React from 'react'
import './Blog.css';
import Piano from '../../assets/images/playpiano.jpeg';
import Sax from '../../assets/images/playsax.jpeg';
import Guitar from '../../assets/images/guitar2.jpeg';


function Blogs() {
  return (
       <div className= "blogs">
         <h3>Blogs</h3>
         <div className="blog__container" >
         <img className='blog__img' src={Piano} alt = "playing piano"/>
         <div className="blog__container--content">
         <h4>Playing Piano</h4>
         <p>Did you know that when you're learning to play <br/>
            the piano you are actually improving several skills <br/>
             that will help you be more successful in other areas <br/>
              such as university or work? In fact, <br/>
               multiple studies link the study of music to
               increased success in other fields, <br/>
               as this article from the New York Times points out. <br/>
              So what is it that makes musicians more successful in life? <br/>
               Here is a list of ix essential skills that you will master <br/>
                by practicing the piano</p>
      
       <button><a href="/Users/macbook/Documents/Integrify/fs12-css-sass/blog.html">Learn More</a></button>
     </div>
   </div>
   

   
     <div className="blog__container" >
       <img className='blog__img' src={Sax} alt = "playing sax"/>
       <div className="blog__container--content">
       <h4>Playing Saxophone</h4>
       <p>Whether you are a beginner saxophone player, <br/>
          wondering how to get started, <br/>
           or just a fan of the instrument looking for tips <br/>
            on the greatest players of all time, you wll find it here. <br/>
         Soprano, alto, tenor or baritone, <br/>
          the sax is one of the easier musical instruments <br/>
           to get started with.
         The keys were designed for easy, <br/>
          logical use, the mouthpiece is less complex than its orchestral counterparts,  <br/>
           and playing in tune with a good tone is <br/>
            feasible within a few practice sessions.</p>
    
            <button><a href="/Users/macbook/Documents/Integrify/fs12-css-sass/blog.html">Learn More</a></button>
   </div>
</div>
   <div className="blog__container" >
     <img className='blog__img' src={Guitar}alt = "Playing guitar"/>
     <div className="blog__container--content">
     <h4>Playing Guitar</h4>
     <p>An acoustic guitar is one of the most popular instruments today. <br/>
        Everybody seems to like it because it is pretty ubiquitous. <br/>
         It is the first step if you want to climb the tower of the music world. <br/>
          However, don't ever think that you this instrument is easy to learn. <br/>
           Depending on what you want to achieve, an acoustic guitar can be so pretty <br/> difficult.</p>
   
           <button><a href="/Users/macbook/Documents/Integrify/fs12-css-sass/blog.html">Learn More</a></button>
   </div>
   </div>
   </div>
  )
}

export default Blogs