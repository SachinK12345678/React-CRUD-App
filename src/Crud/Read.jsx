import React, {useState,useEffect } from 'react'
import axiosInstance from '../Help/axiosinstance'
import "../Crud/Crud.css"
import { Link, useParams } from 'react-router-dom';

const Read = () => {
let {id}=useParams();
    let [values,setValues]=useState([])

    useEffect(()=>{
        let fetchData= async()=>{
        let {data}=await axiosInstance.get("/posts")
        setValues(data)
        }
        fetchData()
    },[])

    let deleteItem=(id)=>{
         axiosInstance.delete(`/posts/${id}`)
        //  window.location.assign("/read")
    }
 
  return (
    <>
                   <h1>Users Information</h1>
            <div className='main-read-container'>
          {values.map((x)=>{
            return (
                <>
                  <div className="sub-read-container">
                    <h3>UserName : <span>{x.userName}</span></h3>
                    <h3>Password : {x.password}</h3>
                    <h3>Email: <span>{x.email}</span></h3>
                    <h3>Phone :<span>{x.phone}</span></h3>
                    
                   <div className='btn-block'>

                  <button className='btn btn-success'><Link className='update-btn' to={`update/${x.id}`}>UPDATE</Link></button>
                  <button className='btn btn-danger' onClick={()=>{{deleteItem(x.id)}}}>DELETE</button>
                  </div>
                    </div>
                </>
                
            )
          })}
          </div>
    </>
  )
}

export default Read
