import React from 'react'
import {Link} from 'react-router-dom'
const Deals = () => {
  return (
    <>
      <div className="visit-country mb-4">
    <div className="container">
      <div className="row">
        <div className="col-lg-5">
          <div className="section-heading">
            <h2>View Our Exclusive Packages</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8">
          <div className="items">
            <div className="row">
              <div className="col-lg-12">
                <div className="item">
                  <div className="row">
                    <div className="col-lg-4 col-sm-5">
                      <div className="image">
                        <img src="asset/images/party.jpg" alt="sda"/>
                      </div>
                    </div>
                    <div className="col-lg-8 col-sm-7">
                      <div className="right-content">
                        <h4>Party</h4>
                        <span>$10k</span>
                        <div className="main-button">
                          <Link className='button'  to="/reservations">Book Now</Link>
                        </div>
                        <ul className="info">
                          <li><i className="fa fa-user"></i> 600+ People</li>
                          <li><i className="fa fa-globe"></i> 30 m2</li>
                          <li><i className="fa fa-home"></i> $10K</li>
                        </ul>
                    
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="item">
                  <div className="row">
                    <div className="col-lg-4 col-sm-5">
                      <div className="image">
                        <img src="asset/images/seminar.jpg" alt="imhasg"/>
                      </div>
                    </div>
                    <div className="col-lg-8 col-sm-7">
                      <div className="right-content">
                        <h4>Corporate Seminar</h4>
                        <span>$2.5k</span>
                        <div className="main-button">
                          <Link className='button' to="/reservations">Book Now</Link>
                        </div>
                        <ul className="info">
                          <li><i className="fa fa-user"></i> 400+ People</li>
                          <li><i className="fa fa-globe"></i> 27m2</li>
                          <li><i className="fa fa-home"></i> $2.5k</li>
                        </ul>
                     
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="item last-item">
                  <div className="row">
                    <div className="col-lg-4 col-sm-5">
                      <div className="image">
                        <img src="asset/images/wedding.jpg" alt=""/>
                      </div>
                    </div>
                    <div className="col-lg-8 col-sm-7">
                      <div className="right-content">
                        <h4>Wedding Event</h4>
                        <span>$5k</span>
                        <div className="main-button">
                          <Link className='button' to="/reservations">Book Now</Link>
                        </div>
                        <ul className="info">
                          <li><i className="fa fa-user"></i> 250+ People</li>
                          <li><i className="fa fa-globe"></i> 35 m2</li>
                          <li><i className="fa fa-home"></i> $5k</li>
                        </ul>
                        <div className="text-button">
                          <Link to="/deals">View More <i className="fa fa-arrow-right"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
           
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="side-bar-map">
            <div className="row">
              <div className="col-lg-12">
                <div id="map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106327.29546032228!2d73.02811680786166!3d33.61236166402306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfc080c9a565bb%3A0xbfbafb846a828cb2!2sEmpire%20Marquee%20Islamabad!5e0!3m2!1sen!2s!4v1681155461929!5m2!1sen!2s" width="100%" height="550px" frameBorder="0" style={{border:'0',borderRadius:'23px'}} allowFullScreen=""title='fgr'></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 
    </>
  )
}

export default Deals
