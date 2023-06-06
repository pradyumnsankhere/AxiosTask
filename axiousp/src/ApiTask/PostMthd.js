import React,{ useEffect, useState } from "react"
import axios from "axios";


export const PostMthd = () => {
    const userData={
        name:'AA',
        id:'121',
        email:'aa@gmail.com',
    }

    const [data, setData] = useState([])

    useEffect(() => {
        axios.post('https://jsonplaceholder.typicode.com/users',userData)
    .then((response)=>{
       setData(response.data)
       console.log(data);
    })
    .catch((error)=>{
          console.log('something went wrong'+error)

    })
    },[]);
    
  return (
    <div>PostMthd</div>
  )
}
