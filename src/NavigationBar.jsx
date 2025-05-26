import React from 'react'

const NavigationBar = () => {
  return (
    <div>
       <div className="navigationbar">
        <div className="gostudie-logo">
          <h3>GOSTUDIE</h3>
        </div>
 


        <div className="aboutus-contactusbar">
          <p className="aboutus-text">
            About Us
          </p>

          <p className="contactus-text">
            Contact us
          </p>
        </div>



        <div className="join-waitlist-btn">
        <p className="join-waitlist">
            Join Waitlist
        </p>
        </div>
      </div>
    </div>
  )
}

export default NavigationBar
