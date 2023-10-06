import React from 'react'
import {Link} from 'react-router-dom'
const Slider = () => {
  const onChange = (e)=>{
    console.log("Slider is doing well")
  }
  return (
    <>
        <section id="section-1">
    <div className="content-slider">
      <input type="radio" id="banner1" className="sec-1-input" name="banner" checked onChange={onChange} />
      <input type="radio" id="banner2" className="sec-1-input" name="banner"/>
      <input type="radio" id="banner3" className="sec-1-input" name="banner"/>
      <input type="radio" id="banner4" className="sec-1-input" name="banner"/>
      <div className="slider">
        <div id="top-banner-1" className="banner">
          <div className="banner-inner-wrapper header-text">
            <div className="main-caption">
              <h2>Reserve the Best Marquee for your</h2>
              <h1>Delightful Wedding</h1>
              <div className="border-button"><Link to="/reservations">Book Now</Link></div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="more-info">
                    <div className="row">
                      <div className="col-lg-3 col-sm-6 col-6">
                        <i className="fa fa-user"></i>
                        <h4><span>Capacity:</span><br/>400+</h4>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-6">
                        <i className="fa fa-globe"></i>
                        <h4><span>Hall Area:</span><br/>25 M<em>2</em></h4>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-6">
                        <i className="fa fa-home"></i>
                        <h4><span>AVG Price:</span><br/>$2K</h4>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-6">
                        <div className="main-button">
                          <Link className='button' to="/reservations">Book Now</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="top-banner-2" className="banner">
          <div className="banner-inner-wrapper header-text">
            <div className="main-caption">
              <h2>Reserve the Best Marquee for your</h2>
              <h1>Private Gathering</h1>
              <div className="border-button"><Link to='/reservations'>Book Now</Link></div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="more-info">
                    <div className="row">
                      <div className="col-lg-3 col-sm-6 col-6">
                        <i className="fa fa-user"></i>
                        <h4><span>Capacity:</span><br/>200+</h4>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-6">
                        <i className="fa fa-globe"></i>
                        <h4><span>Area:</span><br/>20 M<em>2</em></h4>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-6">
                        <i className="fa fa-home"></i>
                        <h4><span>AVG Price:</span><br/>$1.5K</h4>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-6">
                        <div className="main-button">
                          <Link className='button' to="/reservations">Reserve Now</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="top-banner-3" className="banner">
          <div className="banner-inner-wrapper header-text">
            <div className="main-caption">
              <h2>Book The Right Place for Your:</h2>
              <h1>Party</h1>
              <div className="border-button"><Link to="/reservations">Book Now</Link></div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="more-info">
                    <div className="row">
                      <div className="col-lg-3 col-sm-6 col-6">
                        <i className="fa fa-user"></i>
                        <h4><span>Capacity:</span><br/>450+</h4>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-6">
                        <i className="fa fa-globe"></i>
                        <h4><span>Area:</span><br/>30 M<em>2</em></h4>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-6">
                        <i className="fa fa-home"></i>
                        <h4><span>AVG Price:</span><br/>$4K</h4>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-6">
                        <div className="main-button">
                          <Link className='button' to="/reservations">View More</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="top-banner-4" className="banner">
          <div className="banner-inner-wrapper header-text">
            <div className="main-caption">
              <h2>Celebrate in Our Marquee</h2>
              <h1>Your Beloved's Birthday</h1>
              <div className="border-button"><Link to="/reservations">Book NOW</Link></div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="more-info">
                    <div className="row">
                      <div className="col-lg-3 col-sm-6 col-6">
                        <i className="fa fa-user"></i>
                        <h4><span>Capacity:</span><br/>500+</h4>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-6">
                        <i className="fa fa-globe"></i>
                        <h4><span>Area:</span><br/>34 M<em>2</em></h4>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-6">
                        <i className="fa fa-home"></i>
                        <h4><span>AVG Price:</span><br/>$10K</h4>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-6">
                        <div className="main-button">
                          <Link className='button' to="/reservation">Reserve the Date Now</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav>
        <div className="controls">
          <label htmlFor="banner1"><span className="progressbar"><span className="progressbar-fill"></span></span><span className="text">1</span></label>
          <label htmlFor="banner2"><span className="progressbar"><span className="progressbar-fill"></span></span><span className="text">2</span></label>
          <label htmlFor="banner3"><span className="progressbar"><span className="progressbar-fill"></span></span><span className="text">3</span></label>
          <label htmlFor="banner4"><span className="progressbar"><span className="progressbar-fill"></span></span><span className="text">4</span></label>
        </div>
      </nav>
    </div>
  </section>
    </>
  )
}

export default Slider
