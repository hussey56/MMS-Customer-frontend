import React, { useContext, useState } from 'react'
import ReservationCard from './ReservationCard';
import { useEffect } from 'react';
import ReservationContext from '../../context/Reservations/ReservationContext';
import './index.css'

const MyReservations = () => {

  const token = localStorage.getItem('customer_token')
const context = useContext(ReservationContext);
const {getReservations,reserves} = context
const [count,setCount] = useState(0)
  useEffect(()=>{
    getReservations(token);
  },[reserves,count])
  return (
    <>
     <div className="maind">

    <div className="bodyd">

   <div className="containers">

  
        {reserves.length ===0 && <>
        <h1>No Reservation to Show</h1>
        </>}
      

       

       
        {reserves.length !== 0 &&    
        <>
          <h1>Your Reservation History</h1>
         {reserves.map((reserve)=>{
          return <ReservationCard key={reserve._id} data={reserve} setCount={setCount}/>
        })}
        </>}
      
        
         </div>
       </div>
      </div>
    
    </>
  )
}





export default MyReservations
