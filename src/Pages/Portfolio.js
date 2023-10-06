import React, { useEffect } from 'react'
import Footer from '../Utilities/Footer'
import Banner from '../Components/Portfolio/Banner'
import Gallery from '../Components/Portfolio/Gallery'
import Nav from '../Utilities/Nav'

const Portfolio = (props) => {
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
    }, // eslint-disable-next-line
    [])
  return (
    <>
    <Nav/>
    <Banner/>
    <Gallery/>
      <Footer/>
    </>
  )
}

export default Portfolio
