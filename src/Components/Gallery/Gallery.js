import React from 'react'
import './Gallery.css'

function Gallery() {
  return (
    <div className="Gallery-Container">

        <div className="Insta">

            <img src="./Images/Logo.png"></img>
        </div>

        <div className="Group">
          <div className="gallery-1">

            <img src="./Images/Screenshot 2022-03-12 at 12.29.png"></img>
          <img src="./Images/Screenshot 2022-03-12 at 12.30.png"></img>

           </div>

          <div className="gallery-2">
            <div className="image-gallery-container">
                <ul>
                    <li><img src="./Images/Polygon 19.jpg"></img></li>
                    <li><img src="./Images/Polygon 20.jpg"></img></li>
                    <li><img src="./Images/Polygon 21.jpg"></img></li>
                    
                </ul>

                <ul>
                    <li><img src="./Images/Polygon 21.jpg"></img></li>
                    <li><img src="./Images/Polygon 19.jpg"></img></li>
                    <li><img src="./Images/Polygon 20.jpg"></img></li>
                </ul>

                <ul>
                    <li><img src="./Images/Polygon 27.jpg"></img></li>
                    <li><img src="./Images/Polygon 21 (1).jpg"></img></li>
                    <li><img src="./Images/Polygon 22.jpg"></img></li>
                </ul>

                <ul>
                    <li><img src="./Images/Polygon 25.jpg"></img></li>
                    <li><img src="./Images/Polygon 19 (1).jpg"></img></li>
                </ul>
            </div>

          </div>

        </div>


    </div>
  )
}

export default Gallery