import React from 'react'
import data from './Data'
import Card from './Card'
const Gallery = () => {
  return (
    <>
       <div className="cities-town mb-3">
    <div className="container">
      <div className="row">
        <div className="slider-content">
          <div className="row">
            <div className="col-lg-12">
              <h2>Marquee <em>Glimpses &amp; Sight's</em></h2>
            </div>
           
            {data.map((dt)=>{
return <Card data={dt} key={dt.image}/>
            })}
               
             
            
              
          
          </div>
        </div>
      </div>
    </div>
  </div> 
    </>
  )
}

export default Gallery
