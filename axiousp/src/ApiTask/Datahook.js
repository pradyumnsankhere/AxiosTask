 
import React from 'react';
// import useCustomHook from './useCustomHook';
import { useCustomHook } from './useCustomHook';

export const Datahook = () => {
  const {user}  = useCustomHook('https://jsonplaceholder.typicode.com/users');
 

  return (
    <div>
       {console.log(user)}
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

  user.map((item)=>
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
    
  );
};