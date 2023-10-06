import React, { useState } from 'react'
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import moment from 'moment';
const Form = () => {
  const token = localStorage.getItem('customer_token')
const [pk,setPk]= useState([])
const changePk = async()=>{
  const request = await fetch('http://localhost:5000/app/mms/backend/event/allevent',{
    method:'GET',
  });
  const response = await request.json();
  const {error,msg,all} =response
  if(error===false){
    setPk(all)
  } else{
    alert("Nothing")
  }
}
const [packagename,setPackageName] = useState('')
const PackageCovert = async(id)=>{
const request = await fetch(`http://localhost:5000/app/mms/backend/event/findevent/${id}`,{
  method:'GET',
});
const response = await request.json();
const {data,error,msg} = response
if(error===false){
  const {name} = data
  setPackageName(name)
}else{
  alert(msg)
}
}
const[price,setPrice] = useState(0);
const [amount,setAmount] = useState(0)
const[tax,setTax] = useState(0);
const taxconverter = (amt)=>{
  const taxAmount = (parseFloat(amt) * 0.03).toFixed(2);
  setTax(taxAmount)
}
const [btns,Setbtns] = useState(false);
const DateChecker = (mydate)=>{
  const currentDate = new Date();
  const enteredDate = new Date(mydate);

  Setbtns(enteredDate < currentDate);
}
const [packages,setPackages] = useState('64ce65db2ca0e68c5256363d')
const onChangePk = (e)=>{
setPackages(e.target.value)
}
const [pkcolor,setPkcolor] = useState('#f39c12')
const ColorChanger =async (id)=>{

 const request = await fetch(`http://localhost:5000/app/mms/backend/event/findevent/${id}`,{
    method:'GET',
  });
  const response = await request.json();
  const {data,error,msg} = response
  if(error===false){
    const {color} = data
setPkcolor(color)
  }else{
    alert(msg)
  }
}
const timeChanger =(dateString)=>{
  // Convert the date string to a Date object
  const formattedDate = new Date(dateString).toLocaleString("en-US", {
      
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
  
    
  });
  return formattedDate
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

const [s1,setS1] = useState(true)
const [s2,setS2] = useState(false)
const [s3,setS3] = useState(false)
const [eventtype,setEventype] = useState('specific');

const onChanger = (e)=>{
  setEventype(e.target.value)
 
}
const calculateHourDifference = (date,firstTime,secondTime) => {
  // Combine date with first time
  const dateTime1 = new Date(`${date}T${firstTime}:00`);
  // Combine date with second time
  const dateTime2 = new Date(`${date}T${secondTime}:00`);
  // Calculate the time difference
  const timeDifference = dateTime2 - dateTime1;
  const hoursDifference = timeDifference / (1000 * 60 * 60);

  return hoursDifference;
};
const calculateDaysDifference = (date1,date2)=>{
  const dateObj1 = new Date(date1);
  const dateObj2 = new Date(date2);

  // Calculate the time difference in milliseconds
  const timeDifference = dateObj2 - dateObj1;

  // Convert milliseconds to days
  const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

  return daysDifference;
}
const generateExpense = async (people,id,type)=>{
  const request = await fetch(`http://localhost:5000/app/mms/backend/event/findevent/${id}`,{
    method:'GET',
  });
  const response = await request.json();
  const {data,error,msg} = response
  if(error===false){
    const {price100,price200,price400,price600,perday,perhour} = data
    if(eventtype === 'specific'){
   let t1=   calculateHourDifference(e1.date,e1.timefrom,e1.timeto)
   let price = t1*perhour;
   if(people==='100+'){
    setAmount(price+price100)
  }else if(people==='200+'){
    setAmount(price+price200)
  }else if(people==='400+'){
    setAmount(price+price400)
  }else if(people==='600+'){
    setAmount(price+price600)
  }else{
    setAmount(price+price400)
  }
    }else if(eventtype==='whole'){
      
      if(people==='100+'){
        setAmount(price100+perday)
      }else if(people==='200+'){
        setAmount(price200+perday)
      }else if(people==='400+'){
        setAmount(price400+perday)
      }else if(people==='600+'){
        setAmount(price600+perday)
      }else{
        setAmount(price400+perday)
      }
    }else if(eventtype ==='more'){
      let t2= calculateDaysDifference(e3.datefrom,e3.dateto)
      let price = t2*perday;
      if(people==='100+'){
       setAmount(price+price100)
     }else if(people==='200+'){
       setAmount(price+price200)
     }else if(people==='400+'){
       setAmount(price+price400)
     }else if(people==='600+'){
       setAmount(price+price600)
     }else{
       setAmount(price+price400)
     }
    }
 
  }else{
    alert(msg)
  }
}
const expenseCalculator = (guests,id)=>{
  generateExpense(guests,id)
}
const priceCalculator = (num1,num2)=>{
  const n1 =parseInt(num1);
  const n2 = parseInt(num2)
let tp = n1 + n2;
setPrice(tp)
}
  const [fform,setfform] = useState(false)
  const header = useNavigate()
  const [ev,setEv] = useState({
    title: 'Contest',
    start: "2023-09-01T17:50",
    end:"2023-09-01T19:50",
    backgroundColor: '#f56954', //red
    borderColor: '#f56954', //red
    allDay: true
  })
  // eslint-disable-next-line
const ChangeEv = (obj)=>{
  setEv(obj)
}
const timeCoverter = (d1,t1)=>{
  const CombineTimeString =`${d1}T${t1}`;
  const CombineDate = new Date(CombineTimeString);
  return CombineDate;
}
  const DecideEvent = (eventt)=>{
    if(eventt==='specific'){
     
      setData({...data,event:{
        title: packagename,
        start: timeCoverter(e1.date,e1.timefrom),
        end: timeCoverter(e1.date,e1.timeto),
        allDay: false,
        backgroundColor: pkcolor, 
        borderColor: pkcolor
      }})
      // console.log(ev)
      // console.log("event +")
      // console.log(data.event)
      // console.log("event -")
       }else if(eventt==='whole'){
        setData({...data,event:{
        title: packagename,
        start:e2,
        allDay: true,
        backgroundColor: pkcolor , 
        borderColor: pkcolor
      }})
      // console.log(ev)
      // console.log("event +")
      // console.log(data.event)
      // console.log("event -")
       }else if(eventt==='more'){  
        setData({...data,event:{
        title: packagename,
        start: e3.datefrom,
              end: e3.dateto,
        backgroundColor: pkcolor , 
        borderColor: pkcolor
      }})
    //   console.log(ev)
    //   console.log("event +")
    // console.log(data.event)
    // console.log("event -")
       }else{
        setData({...data,event:{
      title: 'Contest',
      start: new Date(),
      backgroundColor: '#f56954', //red
      borderColor: '#f56954', //red
      allDay: true
    }})
    // console.log(ev)
    // console.log("event +")
    // console.log(data.event)
    // console.log("event -")
       }
  }
  //

  // form handling starts
  const [data,setData] = useState({
    name:"",
    number:"",
    guest:"100+",
    event:ev,
    event_type:eventtype
  })
  const handleConfirm = async(e)=>{
    e.preventDefault();
    const request = await fetch('http://localhost:5000/app/mms/backend/reservation/makeareservation',
    {
      method:'POST',
      headers:{
        'Content-type':'application/json',
        'customer_token':token,
      },
      body:JSON.stringify({reservator_name:data.name,reservator_phone:data.number,event_type:eventtype,guests:data.guest,event:data.event,price,eventid:packages})
    },);
    const response = await request.json();

    alert(response);
    header('/account')
    
  }
  const onChange = async (e)=>{
  
    setData({...data,[e.target.name]:e.target.value})
  }
  // form handle ends
  const handleForm = async(e)=>{
    e.preventDefault()
    setfform(true);
  }
const [e1,setE1] = useState({date:'2023-10-10',timefrom:'08:00',timeto:'10:00'})
const [e2,setE2] = useState("2023-10-10")
const onChangeST2 = (e)=>{
  setE2(e.target.value)
}
const HandleTime = (t1,t2)=>{
  // console.log('time1:', t1);
  //   console.log('time2:', t2);
  if (t1 && t2) {
    const momentTime1 = moment(t1, 'HH:mm');
    const momentTime2 = moment(t2, 'HH:mm');

    if (momentTime1.isSame(momentTime2)) {
      setComparisonResult('Times are equal.');
      setError1(true);
      setErrormsge1("Times are Equal")
    } else if (momentTime1.isBefore(momentTime2)) {
      setComparisonResult('Time 1 is earlier.');
      setError1(false);
      setErrormsge1("")
    } else {
      setComparisonResult('Time 2 is earlier.');
      setError1(true);
      setErrormsge1("Time 2 is earlier")
    }
  } else {
    setComparisonResult('');
    // setError1(true);
    // setErrormsge1("Times are Empty")
  }
}

const onChangeSt1 = (e)=>{
  setE1({...e1,[e.target.name]:e.target.value})
  // handleCompare()
}
// eslint-disable-next-line
const [comparisonResult, setComparisonResult] = useState('');
const [errore1,setError1] = useState(false)
const [errormsge1,setErrormsge1]= useState('')
// eslint-disable-next-line
const [comparisonResult1, setComparisonResult1] = useState('');
const [e3,setE3]  =useState({datefrom:"2023-10-10",dateto:"2023-10-13"});
const onChangeSt3 = (e)=>{
setE3({...e3,[e.target.name]:e.target.value})
}
const [errore3,setError3] = useState(false)
const [errormsge3,setErrormsge3]= useState('')
const HandleMonth = (date1,date2)=>{
  // console.log("date1: "+date1)
  // console.log("date2: "+date2)
  if (date1 && date2) {
    const timeDiff = new Date(date2) - new Date(date1);
    const daysDiff = timeDiff / (1000 * 3600 * 24);

    if (daysDiff >= 1) {
      setComparisonResult1('Date difference is at least one day.');
      setError3(false)
      setErrormsge3('')
    } else {
      setComparisonResult1('Date difference is less than one day.');
      setError3(true)
      setErrormsge3("Date difference is less than one day.")
    }
  } else {
    setComparisonResult1('Date difference is less than one day.');

  }
}
const HandleEventType = (eventt)=>{
  if(eventt==='specific'){
    setS1(true);
    setS2(false);
    setS3(false)
    HandleTime(e1.timefrom,e1.timeto)
 
     }else if(eventt==='whole'){
      setS1(false);
      setS2(true);
      setS3(false)
     
      
       }else if(eventt==='more'){
    setS1(false);
    setS2(false);
    setS3(true)
    HandleMonth(e3.datefrom,e3.dateto)
    
     }else{
      setS1(true);
    setS2(false);
    setS3(false)
     }
}
  useEffect(()=>{
    PackageCovert(packages)
    changePk()
    expenseCalculator(data.guest,packages);
    taxconverter(amount);
    priceCalculator(amount,tax);
 DateChecker(data.date)
HandleEventType(eventtype)
DecideEvent(eventtype)
   ColorChanger(packages)
  },// eslint-disable-next-line
  [amount,tax,data.guest,data.date,eventtype,e1.timefrom,e1.timeto,e3.datefrom,e3.dateto,packages,packagename,pkcolor,e1.date])

  return (
    <>
     <div className="reservation-form">
    <div className="container">
      <div className="row">
       
        <div className="col-lg-12">
          {!fform && 
          
          <form id="reservation-form" onSubmit={handleForm}>
            <div className="row">
              <div className="col-lg-12">
                <h4>Make Your <em>Reservation</em> Through This <em>Form</em></h4>
              </div>
              <div className="col-lg-6">
                  <fieldset>
                      <label htmlFor="Name" className="form-label">Your Name</label>
                      <input type="text" name="name" className="Name" placeholder="Enter Your Name" onChange={onChange} value={data.name}  required/>
                  </fieldset>
              </div>
              <div className="col-lg-6">
                <fieldset>
                    <label htmlFor="number" className="form-label">Your Phone Number</label>
                    <input type="text" onChange={onChange} value={data.number} name="number" className="Number" placeholder="Ex. +xxx xxx xxx" 
                     required/>
                </fieldset>
              </div>
              <div className="col-lg-6">
                  <fieldset>
                      <label htmlFor="guest" className="form-label">Number Of Guests</label>
                      <select name="guest" onChange={onChange} value={data.guest} className="form-select" aria-label="Default select example" id="chooseGuests" >
                          <option  value="100+">100-200</option>
                          <option value="200+">200-400</option>
                          <option value="400+">400-600</option>
                          <option value="600+">600+</option>
                      </select>
                  </fieldset>
              </div>
               <div className="col-lg-6">
                  <fieldset>
                      <label htmlFor="type" className="form-label">Event Type</label>
                      <select name="type" onChange={onChanger} value={eventtype} className="form-select" aria-label="Default select example" id="choosetype" >
                          <option  value="specific">Specific Time</option>
                          <option value="whole">Whole Day</option>
                          <option value="more">More than One Day</option>
                          
                      </select>
                  </fieldset>
                  </div>
                  {s1===true &&<>
    <div className="col-lg-6">
                <fieldset>
                    <label htmlFor="date" className="form-label">Event Date</label>
                    <input type="date" onChange={onChangeSt1} value={e1.date}   name="date" className="date" required/>
                </fieldset>
              </div>
                <div className="col-lg-3">
                <fieldset>
                    <label htmlFor="timefrom" className="form-label">from</label>
                    <input type="time" onChange={onChangeSt1} value={e1.timefrom}   name="timefrom" className="date" required/>
                </fieldset>
              </div>
                <div className="col-lg-3">
                <fieldset>
                    <label htmlFor="timeto" className="form-label">to</label>
                    <input type="time" onChange={onChangeSt1} value={e1.timeto}  name="timeto" className="date" required/>
                   
                </fieldset>
              </div>
              <div className="col-lg-12">
              {
                errore1 && <>
                                   
                  <p className='text-center text-danger'>{errormsge1}</p>
             
                </>
              }
              </div>
                  </>}
                  {s2===true &&<>
                      <div className="col-lg-12">
                <fieldset>
                    <label htmlFor="date" className="form-label">Event Date</label>
                    <input type="date" onChange={onChangeST2} value={e2}  name="date" className="date" required/>
                </fieldset>
              </div>
                  </>}
                  {s3===true &&<>
                    <div className="col-lg-6">
                <fieldset>
                    <label htmlFor="datefrom" className="form-label">from</label>
                    <input type="date" onChange={onChangeSt3} value={e3.datefrom}   name="datefrom" className="date" required/>
                </fieldset>
              </div>
                <div className="col-lg-6">
                <fieldset>
                    <label htmlFor="dateto" className="form-label">to</label>
                    <input type="date" onChange={onChangeSt3} value={e3.dateto}   name="dateto" className="date" required/>
                </fieldset>
              </div>
              {errore3 === true && <>
                <p className='text-center text-danger'>{errormsge3}</p>
              </>}
                  </>}
          
              <div className="col-lg-12">
                  <fieldset>
                      <label htmlFor="destination" className="form-label">Choose Your Package Type</label>
                      <select name="destination" onChange={onChangePk} className="form-select" value={packages} aria-label="Default select example" id="chooseCategory" required >
                       <option value={''}>Select an Option</option>
                        {pk.length !==0 && pk.map((pkg)=>{
                          return <option key={pkg._id} value={pkg._id}>{pkg.name}</option>
                        })}
                         
                      </select>
                  </fieldset>
              </div>
              {token &&
               <div className="col-lg-12">                        
               <fieldset>

                   <button className="approved-button" disabled={btns===true||errore1===true ||errore3===true || packages ===''} type='submit'>Make Your Reservation Now</button>
                 
               </fieldset>
           </div>
              }
             
              {
                !token && <>
                
              <div className="col-lg-12">                        
                <p className='text-center text-danger'>Please Login First To Make a Reservation</p>
              </div>
              </>
              }
              {
                btns && <>
                
                <div className="col-lg-12">                        
                  <p className='text-center text-danger'>Please Select the Right Options</p>
                </div>
                </>
              }
             
            </div>
          </form>
        }
        {
          fform &&
          <>
         <div id="reservation-form">
            <div className="row">
              <div className="col-lg-12">
                <h4 className='text-center'> <em>Invoice</em> Reciept</h4>
              </div>
      
              <div className="col-lg-12">
               <div className='text-center '>
             <b > <span className='form-label' style={{fontSize:'18px'}}>Consumer Name: </span></b>  {data.name}
                </div> 
              </div>
              <div className="col-lg-12">
               <div className='text-center'>
             <b> <span className='form-label' style={{fontSize:'18px'}}>Consumer Contact: </span></b>  {data.number}
                </div> 
              </div>
              {s1===true && <>
                <div className="col-lg-12">
               <div className='text-center '>
             <b> <span className='form-label' style={{fontSize:'18px'}}>Request Time From: </span></b>  {timeChanger(ev.start)}
                </div> 
              </div>
              <div className="col-lg-12">
               <div className='text-center '>
             <b> <span className='form-label' style={{fontSize:'18px'}}>Request Time to: </span></b>  {timeChanger(ev.end)}
                </div> 
              </div>
              </>}
              {s2===true && <>
                <div className="col-lg-12">
               <div className='text-center '>
             <b> <span className='form-label' style={{fontSize:'18px'}}>Request Date: </span></b>  {data.event.start}
                </div> 
              </div>
              </>}
                {s3===true && <>
                <div className="col-lg-12">
               <div className='text-center '>
             <b> <span className='form-label' style={{fontSize:'18px'}}>Request Date From: </span></b>  {data.event.start}
                </div> 
              </div>
              <div className="col-lg-12">
               <div className='text-center '>
             <b> <span className='form-label' style={{fontSize:'18px'}}>Request Date to: </span></b>  {data.event.end}
                </div> 
              </div>
              </>} 
             
              <div className="col-lg-12">
               <div className='text-center'>
             <b> <span className='form-label' style={{fontSize:'18px'}}>Event Type: </span></b>  {packagename}
                </div> 
              </div>
              <div className="col-lg-12">
               <div className='text-center'>
             <b> <span className='form-label' style={{fontSize:'18px'}}>Guest Capacity: </span></b>  {data.guest}
                </div> 
              </div>
              <div className="col-lg-12">
               <div className='text-center'>
             <b> <span className='form-label' style={{fontSize:'18px'}}>Hall Expanse: </span></b>  {Formater(amount)}PKR
                </div> 
              </div>
              <div className="col-lg-12">
               <div className='text-center'>
           <b> <span className='form-label' style={{fontSize:'18px'}}>Tax (3%): </span></b>{Formater(tax)}PKR  {/*  {data.guest==='100+'?6000:data.guest==='200+'?9000:data.guest==='400+'?12000:data.guest==='600'?18000:10000} */}
                </div> 
              </div>
              <div className="col-lg-12">
               <div className='text-center'>
             <b> <span className='form-label' style={{fontSize:'18px'}}>Total Amount: </span></b>
             {Formater(price)} PKR
               {/* {data.guest==='100+'?206000:data.guest==='200+'?309000:data.guest==='400+'?412000:data.guest==='600'?618000:510000}PKR */}
                </div> 
              </div>
              <div className="col-lg-12 mt-2">                        
                  <fieldset>
                      <button className="main-button" onClick={handleConfirm}  type='submit'>Checkout</button>
                  </fieldset>
              </div>
            </div>
       
         </div>
       
          </>
        }
        </div>
      </div>
    </div>
  </div> 
    </>
  )
}

export default Form
