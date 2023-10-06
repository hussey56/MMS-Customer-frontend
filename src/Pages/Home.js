import React, { useEffect , useState } from 'react'
import Slider from '../Components/Home/Slider'
import Deals from '../Components/Home/Deals'
import Footer from '../Utilities/Footer'
import Preloader from '../Utilities/Preloader'
import Nav from '../Utilities/Nav'

const Home = (props) => {
  const [loading,setLoading] = useState(true);
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
    setTimeout(()=>{
      setLoading(false)
          },2000)

  },// eslint-disable-next-line 
  [])
  
  return (
   <>
   {loading===true?<Preloader/>:
  
    <>
    <Nav/>
   <Slider/>
   <Deals/>
   <Footer/>
  </>  }
  </>
  )
}

export default Home
