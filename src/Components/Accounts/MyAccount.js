import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const MyAccount = () => {
const header = useNavigate()
  const handleLogout =()=>{
    localStorage.removeItem('customer_token')
header('/')
  }
  const [name,setName] = useState('')
  const [id,setId] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const LoadData = async()=>{
    const token  = localStorage.getItem('customer_token')
    const request = await fetch('http://localhost:5000/app/mms/backend/customer/fetchdata',{
      method:'GET',
      headers:{
        'Content-Type': 'application/json',
        'customer_token':token,
          },
           
    });
    const response = await request.json();
    const {customer} = response
    const {name,email,contact,_id} = customer
    setEmail(email)
    setName(name)
    setPhone(contact)
    setId(_id)
  }
  const [formdata,setFormdata] = useState({cpassword:"",cnpassword:"",npassword:""});
  const onChange = (e)=>{
    setFormdata({...formdata,[e.target.name]:e.target.value})
  }
  const HandleUpdate = async(e)=>{
    e.preventDefault()
    const token = localStorage.getItem('customer_token')
    const request = await fetch(`http://localhost:5000/app/mms/backend/customer/changepasswordcustomer/${id}`,{
      method:'PUT',
      headers:{
        'customer_token':token,
        'Content-type':'application/json'
      },
      body:JSON.stringify({oldpassword:formdata.cpassword,newpassword:formdata.npassword})
    })
    const response = await request.json()
    const {error,msg} = response
    if(error===false){
      alert('Password Updated Successfully')
      setFormdata({cpassword:"",cnpassword:"",npassword:""})

    }else{
      alert(msg)
      setFormdata({cpassword:"",cnpassword:"",npassword:""})
    }

  }
  useEffect(()=>{
    LoadData()
  },[])
  return (
    <>
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />


    <section>
    <div className="container py-5">
 
      <div className="row">
        <div className="col-lg-4">
          <div className="card mb-4">
            <div className="card-body text-center">
              <img src={`https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/800px-User-avatar.svg.png`} alt="avatar"
                className="rounded-circle img-fluid"  style={{width: "150px"}}/>
              <h5 className="my-3">{name}</h5>
              <p className="text-muted mb-1">{phone}</p>
              <div className="d-flex justify-content-center mb-2">
                <Link to={'/account'} className="btn btn-lg btn-outline-warning ms-1">My Reservations</Link>
                <button type="button" onClick={handleLogout} className="btn btn-lg btn-outline-dark ms-1">Logout</button>
              </div>
            </div>
          </div>

        </div>
        <div className="col-lg-8">
          <div className="card mb-2">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">Name</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{name}</p>
                </div>
              </div>
              <hr/>
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">Email</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{email}</p>
                </div>
              </div>
              <hr/>
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">Phone</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{phone}</p>
                </div>
              </div>

            </div>
          </div>
          <div className="row">
            <div className="col-md-12 my-3">
                <div className="card">
                <h1 className='text-center text-dark font-italic'>Change Password</h1>
                <hr />
                <div className="card-body">
                  <form onSubmit={HandleUpdate}>
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">Current Password</p>
                </div>
             
                <div className="col-sm-9">
                <input type="password" class="form-control" onChange={onChange} value={formdata.cpassword} name='cpassword' required />

                </div>
              </div>
              <hr/>
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">New Password</p>
                </div>
             
                <div className="col-sm-9">
                <input type="password" class="form-control" onChange={onChange} value={formdata.npassword} name='npassword' required/>

                </div>
              </div>
              <hr/>
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">Confirm New Password</p>
                </div>
             
                <div className="col-sm-9">
                <input type="password" class="form-control" onChange={onChange} value={formdata.cnpassword} name='cnpassword' required />

                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-sm-12 text-center">
                  <button className='btn btn-primary' disabled={formdata.npassword!==formdata.cnpassword}  type='submit'>Update Changes</button>
                </div>
              </div>
              </form>
            </div>
                </div>
        


            </div>
          
   
         
            
           
           
          </div>
        </div>
      </div>
    </div>
  </section>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script>
 
  </>
  )
}

export default MyAccount
