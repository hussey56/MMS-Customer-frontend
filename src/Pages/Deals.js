import React, { useEffect } from 'react'
import Footer from '../Utilities/Footer'
import Card from '../Components/Deals/Card'
import Nav from '../Utilities/Nav'

const Deals = (props) => {
    useEffect(()=>{
        setTimeout(()=>{
            props.progress(30)
        },500)
        setTimeout(()=>{
            props.progress(80)
        },1000)
        setTimeout(()=>{
            props.progress(100)
        },1200)
      },// eslint-disable-next-line 
      [])
  return (
    <>
    
    <Nav/>
    <section className='visit-country'>
    <div className="container">
       <Card/>
       
    </div>
      <Footer/>
    </section>
    </>
  )
}

export default Deals
