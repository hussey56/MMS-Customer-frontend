import React from 'react'

const Card = (props) => {
    const {data} =props
    const {image,tag} = data
  return (
    <>
       <div className="col-md-3 my-1">
             <div className="item">
                  <div className="thumb">
                    <img src={`asset/images/${image}`} alt="citie" width={100} height={200}/>
                    <h4>#{tag}</h4>
                  </div>
                </div>
             </div>
    </>
  )
}

export default Card
