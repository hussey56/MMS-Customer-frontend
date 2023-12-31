import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <>
      <div className="about-main-content">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="content">
            <div className="blur-bg"></div>
            <h4>Explore our Marquee</h4>
            <div className="line-dec"></div>
            <h2>Welcome to KSR WEDDING PALACE</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt uttersi labore et dolore magna aliqua is ipsum suspendisse ultrices gravida</p>
            <div className="main-button">
              <Link className='button' to="/">Book Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 
    </>
  )
}

export default Banner
