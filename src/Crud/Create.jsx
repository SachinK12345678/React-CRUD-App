import React,{useState} from 'react'
import axiosInstance from './../Help/axiosinstance';
import { useNavigate } from 'react-router-dom';
const Create = () => {
    let navigate=useNavigate()
    let [userName,setUserName]=useState('')
    let [password,setPassword]=useState('')
    let [email,setEmail]=useState('')
    let [phone,setPhone]=useState('')

    let handleSubmit=(e)=>{
       
        e.preventDefault();
        let payload={
            userName,
            password,
            email,
            phone
        }
        console.log({userName,password,email,phone})
        axiosInstance.post("/posts",payload)
        navigate("/read")
        alert('data posted successfully')

    }
  return (
    <>
    <div className="Crd-Main">
        <div className="Crd-Sub">
        <h2 style={{textAlign:'center'}} className='register-head'>REGISTER FORM</h2>
            <div className="formData">
            <label className='register-label' htmlFor="username">UserName :</label>
            <input type="text" id='username' onChange={(e)=>{setUserName(e.target.value)}} />  <br /> <br />
            <label className='  ' htmlFor="pass">Password :</label>
            <input type="text" id='pass' onChange={(e)=>{setPassword(e.target.value)}} />  <br /> <br />
            <label className='register-label' htmlFor="email" >Email ID :</label>
            <input type="email" id='email'  onChange={(e)=>{setEmail(e.target.value)}}/>  <br /> <br />
            <label className='register-label' htmlFor="phone" >Phone :</label>
            <input type="number" id='phone' onChange={(e)=>{setPhone(e.target.value)}}/>   <br /> <br />
            <button style={{alignItems:'center'}} className='btn btn-primary' id='register-btn' onClick={handleSubmit} >Register</button>
            
            </div>
    </div>
    </div>
    </>
  )
}

export default Create
