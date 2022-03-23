import React from 'react'
import './Testimonial.css'

function Testimonial() {
  return (
    <div className="Testimonial-container">

    

        <div className="header-testimonial">

                <h2>Testimonial</h2>
                <img src="./Images/image 10.png"></img>
        </div>
        
        <div className="detail-container">

        <img className="left" src="./Images/left.png"></img>
        <img className="right" src="./Images/right.png"></img>

            <div className="first">
                <img src="./Images/Ellipse 5.png"></img>
            </div>

            <div className="second">
                <h3>Vatsala Wilson</h3>
                <div className="box">
                <p className="wrap">I am glad that I had you as my makeup artist on our big day. Thank you so much for all your help, you are one seriously talented woman! I looked so beautiful and not to mention that makeup looked stubbing on me.</p>
                

                   <p className="wrap">You made me feel so comfortable (not to forget the soft brush touch, asmr feeling), I couldn't have picked a better makeup artist.</p>

                   </div>

            </div>
        </div>
        
    </div>
  )
}

export default Testimonial