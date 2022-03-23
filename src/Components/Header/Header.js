import React from 'react'
import './Header.css'

function Header() {
  return (

    <>
    <div className="Container">
        <div className="Contacts">
        <ul>
            <li><img src="./Images/Phone.png"></img>+91-9999963537</li>
            <li><img src="./Images/location-dot-solid.svg"></img>123, lane, opp. Sai Temple
Emerald Hills
Dehradun- 248001</li>
        </ul>

        </div>

        <div className="Logo">
            <img src="./Images/image 2.png"></img>

        </div>

        <div className="social">
           <img src="./Images/FB.png"></img>
           <img src="./Images/instagram-brands.svg"></img>
           <img src="./Images/linkedin-in-brands.svg"></img>
           <img src="./Images/envelope-solid.svg"></img>
        </div>
    </div>

    <div className="Menu">
        <div>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Media</li>
            <li>Blog</li>
            <li>Contact Us</li>
        </ul>
        </div>
    </div>
    </>
  )
}

export default Header