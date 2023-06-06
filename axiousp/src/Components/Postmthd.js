import React from 'react'
import  { useEffect, useState } from 'react';
import axios from 'axios';

export const Postmthd = () => {
    const [data,setData]=useState( []);
 const user={
    name:'AA',
    id:11
 }

    useEffect(()=>{
        axios.post('https://jsonplaceholder.typicode.com/users',user)
    .then((response)=>{
      console.log(response.data);
       setData(response.data)

       
    })
    .catch((error)=>{
          console.log('something went wrong'+error)

    })
    },[]);
    
  return (
    <div> 
      <button>Click </button>
    </div>
  )
}
