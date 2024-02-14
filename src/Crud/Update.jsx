import React,{useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../Help/axiosinstance'
import { Navigate } from 'react-router-dom'

const Update = () => {

    let navigate=useNavigate()
    
    let {id}=useParams()

    let [userName,setUserName]=useState("")
    let [password,setPassword]=useState("")
    let [email,setEmail]=useState("")
    let [phone,setPhone]=useState("")


    useEffect(() => {
         let fetchData= async()=>{
            let {data}=await axiosInstance.get(`/posts/${id}`)
            setUserName(data.userName)
            setPassword(data.password)
            setEmail(data.email)
            setPhone(data.phone)
         }
         fetchData()
    },[])
    

    let handleUpdate=(e)=>{
         e.preventDefault()
         let payload={userName,password,email,phone}
         axiosInstance.put(`/posts/${id}`,payload)
         alert('Updated Successfully')
         navigate('/read')

    }
  return (
    <div className="Crd-Main">
    <div className="Crd-Sub">

    <h2 style={{textAlign:'center'}}>UPDATE FORM</h2>

        <div className="formData">
        <label htmlFor="username">UserName :</label>
        <input type="text" id='username' onChange={(e)=>{setUserName(e.target.value)}} value={userName}/>  <br /> <br />
        <label htmlFor="pass">Password :</label>
        <input type="text" id='pass' onChange={(e)=>{setPassword(e.target.value)}}  value={password}/>  <br /> <br />
        <label htmlFor="email" >Email ID :</label>
        <input type="email" id='email'  onChange={(e)=>{setEmail(e.target.value)}} value={email} />  <br /> <br />
        <label htmlFor="phone" >Phone :</label>
        <input type="number" id='phone' onChange={(e)=>{setPhone(e.target.value)}} value={phone} />   <br /> <br />
        <button variant="info" onClick={handleUpdate}>Update</button>
        
        </div>
</div>
</div>
  )
}

export default Update
