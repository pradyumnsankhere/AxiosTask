 import React, { useEffect, useState } from 'react'
 import axios from 'axios';
 
 export const useCustomHook = (url) => {

  const [user,setUser]=useState([])
  
  useEffect(()=>{
    axios.get(url)
.then((response)=>{
   setUser(response.data)
})
.catch((error)=>{
      console.log('something went wrong'+error)

})
},[url]);


   return {user};
 }
 