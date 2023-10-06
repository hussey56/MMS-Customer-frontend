import React , {useEffect} from 'react'
import Footer from '../Utilities/Footer'
import Form from '../Components/Reservations/Form'
import Nav from '../Utilities/Nav'

const Reservation = (props) => {
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
    <Form/>
      <Footer/>
    </>
  )
}

export default Reservation
