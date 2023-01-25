import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Read = () => {
const [data,setData] = useState([]);

 const getData = () =>{
    axios.get("http://localhost:5000/users")
    .then((res)=>{
        setData(res.data.users);
    })
    .catch((err)=>{
        console.log(err)
    })

}

const deleteItem=(id)=>{
    axios.delete(`http://localhost:5000/users/${id}`)
.then(()=>{
    getData()
})
}  
const handleUpdate=(ele)=>{
    localStorage.setItem('firstName',ele.firstName)
    localStorage.setItem('lastName',ele.lastName)
    localStorage.setItem('age',ele.age)
    localStorage.setItem('email',ele.email)
    localStorage.setItem('password',ele.password)
    localStorage.setItem('id',ele._id)

}


useEffect(()=>{
        getData()
    },[])
  return (
    <div>
          <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">FirstName</th>
      <th scope="col">LastName</th>
      <th scope="col">Age</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  {
data.map((ele)=>{
return(
  <tbody key={ele._id}>
    <tr>
      <th scope="row"></th>
      <td>{ele.firstName}</td>
      <td>{ele.lastName}</td>
      <td>{ele.age}</td>
      <td>{ele.email}</td>
      <td>
        <Link to="/update">
        <button className="btn btn-success" onClick={()=>handleUpdate(ele)}>Edit</button>
      </Link>
        </td>
      <td><button className="btn btn-danger" onClick={() =>deleteItem(ele._id)}>Delete</button></td>
    </tr>
  </tbody>
        )}
    )
  }
</table>
    </div>
  )
}

export default Read
