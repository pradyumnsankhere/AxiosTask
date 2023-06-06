import React, { useEffect, useState } from 'react'

export const FetchMthd = () => {

  const [data,setData]=useState([]);


  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((resp)=>resp.json())
    .then((data)=>{
      console.log(data)
      setData(data)
  })
    },[])
  return (
    <div> 
 

    <div>
      <table>
        <thead >
          <tr> 
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          </tr>
        </thead>
        <tbody>
{

  data.map((item)=>
<tr key={item.id}>
  <td>{item.id}</td>
  <td>{item.name}</td>
  <td>{item.email}</td>
</tr>

  )
}

        </tbody>
      </table>

    </div>

    </div>
  )
}
