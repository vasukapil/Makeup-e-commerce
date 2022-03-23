import React from 'react'
import './Blog.css'

function Blog() {
  return (
    <div className="blog">

        <div className="one">
            <h2>Blog</h2>
            <img src="./Images/image 10.png"></img>
        </div>

        <div className="flex-box">

            <div className="first">

                <img src="./Images/Rectangle 17.png"></img>
                <h2>ROSEWATER BENEFITS: FROM ANTIOXIDANTS TO ANTI-AGING
                </h2>
                <p>By Sohni- June 30, 2021</p>
                <div className="read">Read More</div>

            </div>
            <div className="second">
                <img src="./Images/Rectangle 18.png"></img>
                <h2>EXCITING 2021 EYE MAKEUP TRENDS</h2>
                <p>By Sohni- June 30, 2021</p>
                <div className="read">Read More</div>


            </div>
            <div className="third">
                <img src="./Images/three.png"></img>
                <h2>WHAT ARE THE BENEFITS OF HYALURONIC ACID ON SKIN
</h2>
                <p>By Sohni- June 30, 2021</p>
                <div className="read">Read More</div>


            </div>
          
    </div>

    </div>
  )
}

export default Blog