import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Getmthd = () => {
    const [data,setData]=useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
       setData(response.data)
    })
    .catch((error)=>{
          console.log('something went wrong'+error)

    })
    },[]);
    

  return (
    <div>{
        <ul>
        {data.map((item) => (
          <li key={item.id}> {item.id}, {item.name}</li>
        ))}
      </ul>     
  
  
  }
        
    </div>
  )
}
