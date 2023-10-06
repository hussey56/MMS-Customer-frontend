import React from 'react'
import data from './Data'
import Crd from './Crd'
const Card = () => {
  return (
    <>
     <div className="amazing-deals">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <div className="section-heading text-center">
            <h2>The Best Deals That's Your Event Suit's</h2>
          </div>
        </div>

        {data.length !== 0  && data.map((dt)=>{
          return <Crd data={dt} key={dt.event}/>
        })}
        
      </div>
    </div>
  </div>
    </>
  )
}

export default Card
