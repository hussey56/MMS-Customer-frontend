import React from 'react'
import './index.css'
const ReservationCard = (props) => {
    const {data,setCount} = props
  const {guests,status,event,_id,price,reservator_name,reservator_phone,event_type} = data
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(date).toLocaleDateString(undefined, options);
    return formattedDate;
  };
  
  const handlecancel = async(uid)=>{
    const cancelled = 'cancelled';
    const request = await fetch('http://localhost:5000/app/mms/backend/reservation/updatethestatus',{
      method:'PUT',
      headers:{
        'Content-type':'application/json',
      },
      body:JSON.stringify({id:uid,status:cancelled})
    });
    const response = await request.json();
    const {msg} = response;
    alert(msg);
  }
  const handeldelete = async(id)=>{
    const admin = localStorage.getItem('admin')
    const request = await fetch(`http://localhost:5000/app/mms/backend/reservation/deletereservationbycustomer/${id}`,{
      method:'DELETE',
      headers:{
        'admin_token':admin
      }
    });
    const response = await request.json()
    const {error,msg} = response
    if(error===false){
      alert('Removed Successfully')
      setCount(90)
    }else{
      alert(msg)
    }
  }
  const Formater = (number)=>{
    if (number < 1000) {
      return number.toString(); // No conversion needed
    } else if (number < 1000000) {
      const thousands = (number / 1000).toFixed(0);
      return thousands.toString() + "K";
    } else {
      const millions = (number / 1000000).toFixed(0);
      return millions.toString() + "M";
    }
  }
  const DateAlter =(dateString)=>{
    const formattedDate = new Date(dateString).toLocaleString("en-US", {
    
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
    
      
    });
    return formattedDate
  }

  return (
    <>
          
 <div className="row1">


<article className="cardt fl-left">
      <section className="date">
        <time dateTime={event.start}>
          <span>{Formater(price)}</span><span>Pkr</span>
        </time>
      </section>
        <section className="card-cont">
          <small>{event_type} event</small>
          <h3>{reservator_name}</h3>
          <div className="even-date">
          <i className="fa fa-phone" style={{paddingRight:'4px'}}> </i>
  
              <time>
            <span> {reservator_phone}</span>
            
          </time>
          </div>
          <div className="even-info">
            <i className="fa fa-calendar"></i>
            {event_type==='specific' &&
             <>
            <p>
            {DateAlter(event.start)} - {DateAlter(event.end)}
            </p>
          </>}
          {event_type==='whole' &&
             <>
             <p>{formatDate(event.start)}</p>
             </>}
             {event_type==='more' &&
             <>
             <p>{event.start} to {event.end}</p>
             </>}
          </div>
          <div className="even-info">
            <i className="fa fa-info"></i>
            <p>
          <b>Guests : </b>{guests}
            </p>
          </div>
          {status ==='waiting' &&<>
                <button className='btn btn-secondary m-2'>{status}</button>
                <button className='btn btn-danger m-2' onClick={()=>handlecancel(_id)}>Cancel</button>
                <hr />
                <p className="text-center">
                  Waiting for the Response from the Admin.
                </p>
                </>}
                {status ==='disapproved' &&<>
                <button className='btn btn-info m-2'>{status}</button>

                <button className='btn btn-info m-2 ' onClick={()=>handeldelete(_id)}>Remove</button>

                <hr />
                <p className="text-center">
                  Your Request is Declined Due to Short of Dates.
                </p>
                </>}
                {status ==='approved' &&<>
                <button className='btn btn-success m-2'>{status}</button>
<button className='btn btn-danger m-2 ' onClick={()=>handlecancel(_id)}>Cancel</button>
<hr />
<p className='text-center'>Contact on 0213-1243445 For Further Details.</p>
                </>}
                {status ==='cancelled' &&<>
                <button className='btn btn-primary m-2'>{status}</button>
                <hr />
                <p className="text-center">
                  This Request is Cancelled by your side.
                </p>
                </>}
                {status ==='completed' &&<>
                <button className='btn btn-success m-2'>{status}</button>
                <hr />
                <p className="text-center">
                  Your Event has been Completed.
                </p>
                </>}
        
        
        </section>
    </article>
  
    </div>


    </>
  )
}

export default ReservationCard
