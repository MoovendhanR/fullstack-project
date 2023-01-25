import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Update = () => {
    const[id,setId] = useState(0)
    const [firstName,setFirstname] = useState("")
    const [lastName,setLastname] = useState("")
    const [age,setAge] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
  const navigate = useNavigate();

    const handleUpdate=(e) => {
        console.log("update")
        e.preventDefault();
      axios.patch(`http://localhost:5000/users/${id}`,{
        firstName:firstName,
        lastName:lastName,
        age:age,
        email:email,
        password:password,
      }).then(()=>{
         navigate("/read")
      })
    }
    useEffect(() => {
        setId(localStorage.getItem("id"))
      setFirstname(localStorage.getItem('firstName'))
      setLastname(localStorage.getItem('lastName'))
      setAge(localStorage.getItem('age'))
      setEmail(localStorage.getItem('email'))
      setPassword(localStorage.getItem('password'))
    },[])

  return (
    <>
            <form>
    <div className="mb-3">
    <label  className="form-label">firstName</label>
    <input 
    type="text" 
    value={firstName}
    className="form-control"
    onChange={(e)=>setFirstname(e.target.value)}
    />
  </div>
  <div className="mb-3">
    <label  className="form-label">lastName</label>
    <input 
    type="text" 
    value={lastName}
    className="form-control"
    onChange={(e)=>setLastname(e.target.value)}
    />
  </div> <div className="mb-3">
    <label  className="form-label">age</label>
    <input 
    type="text" 
    value={age}
    className="form-control"
    onChange={(e)=>setAge(e.target.value)}
    />
  </div> <div className="mb-3">
    <label  className="form-label">Email</label>
    <input 
    type="text" 
    value={email}
    className="form-control"
    onChange={(e)=>setEmail(e.target.value)}
    />
  </div>
  <div className="mb-3">
    <label  className="form-label">Password</label>
    <input 
    type="email" 
    value={password}
    className="form-control"  
    onChange={(e)=>setPassword(e.target.value)}
    />
  </div>
  
  <button type="submit" className="btn btn-primary" onClick={handleUpdate}>Update</button>
</form>
    </>
  )
}

export default Update
