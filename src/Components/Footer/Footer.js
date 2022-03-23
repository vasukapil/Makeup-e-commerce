import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="footer">
       <div className="logo-div">
           <img src="./Images/sohni.png" className="logo-s"></img>
       </div>

       <div className="cover">

        <div className="first-1">
            <h4>Contact Us</h4>
            <span><img src=""></img>123, lane, opp. Sai Temple
Emerald Hills
Dehradun- 248001</span>
<span><img src=""></img>Address: R - 255
      2nd Floor, G K- 1
      Delhi - 110048</span>

      <span><img src=""></img>+91-9999963537</span>
        </div>

        <div className="second-2">
            <h4>Useful Links</h4>
            <ul>
                <li>
                   Home
                </li>

                <li>
                   About Us
                </li>

                <li>
                   Services
                </li>

                <li>
                   Media
                </li>

                <li>
                   Blog
                </li>

                <li>
                   Gallery
                </li>
            </ul>
        </div>

        <div className="third-3">
            <h4>Featured Videos</h4>
            <img src="./Images/Image 15.png"></img>


        </div>

        <div className="fourth-4">
            <h4>Accolades</h4>
            <div>
            <img className="imp" src="./Images/Image 11.png"></img>
            <img className="imp" src="./Images/Image 12.png"></img>
            <img className="imp" src="./Images/Image 14.png"></img>
            <img src="./Images/Image 13.png"></img>
            </div>
            
            </div>


            </div>

    </div>
  )
}

export default Footer