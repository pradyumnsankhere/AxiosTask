import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const ApiAxios = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
       setData(response.data)
       console.log(data);
    })
    .catch((error)=>{
          console.log('something went wrong'+error)

    })
    },[]);
    
    const style={
         
         
    }


    return (
        <div>
     <div>
      <table style={style} >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
           
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
                <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
               
            </tr>
          ))}
        </tbody>
      </table>
    </div>


        </div>
    )
}
