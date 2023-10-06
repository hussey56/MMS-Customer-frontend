import React, { useEffect, useState } from 'react'
import Nav from '../Utilities/Nav'
import Footer from '../Utilities/Footer'
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const [data,setData] = useState({email:"",password:""});
  const header = useNavigate();
  const [error,setError] = useState(false)
  const onChange = async (e)=>{
  
    setData({...data,[e.target.name]:e.target.value})
  }
  const handleSubmit = async (e)=>{

    e.preventDefault();
const request = await fetch('http://localhost:5000/app/mms/backend/customer/login',{
  method:'POST',
  headers:{
    'Content-Type': 'application/json',
      },
      body:JSON.stringify({email:data.email,password:data.password})  
});
const response = await request.json();



    if(response.token){
      const {token} = response
      localStorage.setItem('customer_token',token);
      header('/')
    }else{
      setError(true)
    }

  }
  const token = localStorage.getItem('customer_token')
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
     <form id="reservation-form"  onSubmit={handleSubmit}>

        <div className="row">
        <div className="col-lg-12">
                <h4> <em>Login</em>Form</h4>
              </div>
      
<div className="col-12">
<fieldset>
                      <label htmlFor="email" className="form-label">Your email</label>
                      <input type="email" name="email" className="Name" placeholder="email" value={data.email} onChange={onChange}  required/>
                  </fieldset>
</div>
<div className="col-12">
<fieldset>
                    <label htmlFor="password" className="form-label">Your password</label>
                    <input type="password" name="password" placeholder="password" value={data.password} onChange={onChange}  required/>
                </fieldset>
</div>
{error  &&

<div className="col-12">
  <p className="bg-danger text-center" style={{color:'red'}}>Invalid Credentials</p>
</div>}
<div className="col-lg-12">                        
                  <fieldset>
                      <button className="main-button" type='submit'>Login</button>
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

export default Login
