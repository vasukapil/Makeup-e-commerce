import React from 'react'
import './Pricing.css'

function Pricing() {
  return (
    <div class="pricing">
        <h3>BOOK SERVICES</h3>
        <div className="line"></div>
        
    
        <div className="prices-1">
            
                <span>Sohni Juneja</span>
                <span>40,000</span>
                <span className="pink">Book Now</span>
                <span className="pink">Call Now</span>
            
        </div>

        <div className="prices-2">
            
                <span>Senior Sohni Juneja</span>
                <span>40,000</span>
                <span className="pink">Book Now</span>
                <span className="pink">Call Now</span>
            
        </div>

        <div className="prices-3">
            
                <span>Junior Sohni Juneja</span>
                <span>40,000</span>
                <span className="pink">Book Now</span>
                <span className="pink">Call Now</span>
            
        </div>

        <h3>SOHNI JUNEJA SCHOOL OF MAKEUP</h3>

        <div className="line2"></div>

        <div class="gallery">
            <img src="./Images/Rectangle 24.png"/>
            <img src="./Images/Rectangle 25.png"></img>
            <img src="./Images/Rectangle 26.png"></img>
            <img src="./Images/Rectangle 27.png"></img>

        </div>

        <div className="facilities">
            <div className="contain">
              <div>
                <img className="oval" src="./Images/Ellipse 1.png"></img>
                <p>Services</p>
              </div>
              <div>
                  <img className="oval" src="./Images/Ellipse 2.png">

                  </img>
                 <p>Bookings</p>
               </div>
             <div>
                <img className="oval" src="./Images/Ellipse 3.png">

                </img>
               <p>Portfolio</p>
             </div>
             <div>
                <img className="oval" src="./Images/Ellipse 4.png"></img>
                <p>Accolades</p>
             </div>
            </div>

            <h2>Portfolio</h2>
            <img className="portfolio" src="./Images/image 10.png"></img>
        </div>
           
    </div>
  )
}

export default Pricing