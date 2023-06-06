import React from 'react'
import axios from 'axios'


export const Axiousp = () => {

    // GET METHOD WITH AXIOS
    const getData = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
       console.log(response.data)
    })
    .catch((error)=>{
          console.log('something went wrong'+error)

    })
};
 
   // You can also use async/await  function
   
    const  fetchdata= async ()=>{
        try{
          const response=await axios.get('https://jsonplaceholder.typicode.com/users');
            console.log(response.data);

    

        }
        catch(error) {
    console.log(error);
        }
    }

    // Post method exmple
    const datauser ={
        name:'aaa',
        id:101

    }
    
    const postData=()=>{
        axios.post('https://jsonplaceholder.typicode.com/users',datauser)
        .then((resp)=>{
     console.log(resp.data)
        })
        .catch((error)=>{
            console.log(error);
        })
    }


    //Put method axios  
    const updateData={
        name:'B',
        id:121
    }
    const putData=()=>{
        axios.put('https://jsonplaceholder.typicode.com/users/1',updateData)
        .then((resp)=>{
            console.log(resp.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

   //Delete method   
const delData=()=>{
   axios.delete('https://jsonplaceholder.typicode.com/users/1')
  .then(response => {
    
    console.log(response.data);
  })
  .catch(error => {
    
    console.error(error);
  });
}

  return (
    <div><button  onClick={delData}>Click </button></div>
  )
}
