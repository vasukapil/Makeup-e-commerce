import React from 'react'
import './Section.css'

function Section() {
  return (

    <div className="section--container">
      <div className="details">
        <h1>Sohni Juneja</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec posuere mauris, ut lacinia lectus. Donec ut enim mauris. Sed molestie Lorem ipsum dolor sit amet, </p>
        <a>Read More</a>
        
       
       </div>

      <div className="section--image">
      <img className="face" src="./Images/Rectangle 20.png">
            
     </img>
     <div className="border1"><img class="left" src="./Images/left.png"></img></div> 
        <div className="border2"><img class="right" src="./Images/right.png"></img></div>
     <div className="div--img">
                <img className="small--img" src="./Images/2.png"/>
                <img className="small--img" src="./Images/3.png"/>
                <img className="small--img" src="./Images/4.png"/>
                <img className="small--img" src="./Images/124.png"/>
        </div>
        
       
        
       
      </div>
    </div>
    
  )
}

export default Section