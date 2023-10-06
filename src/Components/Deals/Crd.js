import React from 'react'
import {Link} from 'react-router-dom'
const Crd = (props) => {
    const {data} = props
    const {event,time,where,img,money} = data
  return (
    <>
       <div className="col-lg-6 col-sm-6">
          <div className="item">
            <div className="row">
              <div className="col-lg-6">
                <div className="image">
                  <img src={`asset/images/${img}`} width={200} height={320} alt=""/>
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="content">
                  <h4>{event}</h4>
                  <div className="row">
                    <div className="col-6">
                      <i className="fa fa-clock"></i>
                      <span className="list">{time}</span>
                    </div>
                    <div className="col-6">
                      <i className="fa fa-map"></i>
                      <span className="list">{where}</span>
                    </div>
                  </div>
                  <p>capacity: {money}</p>
                  <div className="main-button">
                    <Link className='button' to={`/reservations/${event}`}>Go to Reservations</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
         
    </>
  )
}

export default Crd
