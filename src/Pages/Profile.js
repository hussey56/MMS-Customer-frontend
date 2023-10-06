import React, {useEffect} from 'react'
import Nav from '../Utilities/Nav'
import MyAccount from '../Components/Accounts/MyAccount'
import Footer from '../Utilities/Footer'

const Profile = (props) => {
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
     <MyAccount/>
     <Footer/> 
    </>
  )
}

export default Profile
