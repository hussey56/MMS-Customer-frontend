import React, { useEffect, useState } from 'react'
import Nav from '../Utilities/Nav'
import Footer from '../Utilities/Footer'
import { useNavigate } from 'react-router-dom'

const Signup = (props) => {
 

  const header = useNavigate()
  const token = localStorage.getItem('customer');
  const [data,setData] = useState({name:"",email:"",password:"",contact:"",});
  const onChange = (e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }

  const handleSubmit = async(e)=>{
e.preventDefault();
const request = await fetch('http://localhost:5000/app/mms/backend/customer/register',{
  method:'POST',
  headers:{
      'Content-Type': 'application/json',
        },
        body:JSON.stringify({cname:data.name,cemail:data.email,ccontact:data.contact,password:data.password})         
})
const json  = await request.json();
if(json.Auth){
  alert('Succesfully Registered')
  header('/login')
}
else if(json.token){
  alert('Email already linked with an account!!!')
}

  }
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
if(token){
  header('/')
}
},// eslint-disable-next-line
[])
  return (
    <>
   <Nav/>
    <div className='reservation-form'>
    <div className="container">
    <form id="reservation-form" name="gs" onSubmit={handleSubmit}>

       <div className="row">
       <div className="col-lg-12">
               <h4> <em>Sign up</em>Form</h4>
             </div>
             <div className="col-12">
<fieldset>
                     <label htmlFor="name" className="form-label">Your Name</label>
                     <input type="text" name="name" value={data.name} className="Name" onChange={onChange} placeholder="name"  required/>
                 </fieldset>
</div>
<div className="col-12">
<fieldset>
                     <label htmlFor="email" className="form-label">Your email</label>
                     <input type="email" name="email" value={data.email} className="Name" onChange={onChange} placeholder="email"  required/>
                 </fieldset>
</div>
<div className="col-12">
<fieldset>
                     <label htmlFor="Phone" className="form-label">Your Phone</label>
                     <input type="number" name="contact" value={data.contact} className="Name" onChange={onChange} placeholder="Phone"  required/>
                 </fieldset>
</div>

<div className="col-12">
<fieldset>
                   <label htmlFor="password" className="form-label">Your password</label>
                   <input type="password" name="password" value={data.password} className="Number" onChange={onChange} placeholder="password" pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"  required/>
                   <p style={{color:'black',textAlign:'center'}}>Password must contain at least 1 letter, 1 digit, and be at least 8 characters long.</p>


               </fieldset>
</div>
<div className="col-lg-12">                        
                 <fieldset>
                     <button className="main-button"  type='submit'>Register</button>
                 </fieldset>
             </div>
       </div> 
       </form>
       </div>
   </div>
   <Footer/>
   </>
  )
}

export default Signup
