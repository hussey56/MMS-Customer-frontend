import React, { useState } from 'react'
import ReservationContext from './ReservationContext'

const ReservationState = (props) => {
const [reserves,setReserves] = useState([]);
    const getReservations = async (token)=>{
        const request = await fetch('http://localhost:5000/app/mms/backend/reservation/getallreservation',{
          method:'GET',
          headers:{
            'customer_token':token,
          }
        });
        const response = await request.json();
        const {reservation} = response
        setReserves(reservation);
      }
      

  return (
   <ReservationContext.Provider value={{reserves,getReservations}}>
    {props.children}
   </ReservationContext.Provider>
  )
}

export default ReservationState
