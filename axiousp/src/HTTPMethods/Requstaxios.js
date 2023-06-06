
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Requstaxios = () => {
  const [data,setData]=useState([])
   
    // Post method
    const config={
        method:'POST',
       url:'https://jsonplaceholder.typicode.com/users',
        data:{name:"aaaa"}
    };
    useEffect(()=>{
    axios.request(config)
    .then((resp)=>{
    console.log(resp.data) 
     
     
     
    })
    .catch((error)=>{
        console.log("error",error)
    })

    },[])

    //PUT mehtod

    const configput={
        method:'PUT',
        url:'https://jsonplaceholder.typicode.com/users/1',
        data:{name:"aaaa",email:"@gmail.com"}
    };
    useEffect(()=>{
        axios.request(configput)
        .then((resp)=>console.log(resp.data))
        .catch((error)=>console.log(error))
    },[])

  //PATCH mehtod
    const configpatch={
        method:'PATCH',
        url:'https://jsonplaceholder.typicode.com/users/1',
        data:{name:"aaaa",email:"@gmail.com"}
    };
    useEffect(()=>{
        axios.request(configpatch)
        .then((resp)=>console.log(resp.data))
        .catch((error)=>console.log(error))
    },[])
  

   //DELETE method

   const configdel={
    method:'DELETE',
    url:'https://jsonplaceholder.typicode.com/users/1',
    
};
useEffect(()=>{
    axios.request(configdel)
    .then((resp)=>console.log(resp.data))
    .catch((error)=>console.log(error))
},[])   

  
  return (
    <div>Requstaxios</div>
  )
}
