import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";




const Create = () => {
   const [firstName,setFirstname] = useState("")
   const [lastName,setLastname] = useState("")
   const [age,setAge] = useState("");
   const [email,setEmail] = useState("");
   const [password,setPassword] = useState("");
   const Navigate = useNavigate()

  //  const header = {"Access-Control-Allow-Origin":"*"}

  const handleSubmit=(e)=>{
       e.preventDefault();
    axios.post("http://localhost:5000/users",{
           firstName:firstName,
           lastName:lastName,
           age:age,
           email:email,
           password:password,

    }).then(()=>Navigate("/read"))
  }


  return (
    <div>
          <form>
    <div className="mb-3">
    <label  className="form-label">firstName</label>
    <input 
    type="text" 
    className="form-control"
    onChange={(e)=>setFirstname(e.target.value)}
    />
  </div>
  <div className="mb-3">
    <label  className="form-label">lastName</label>
    <input 
    type="text" 
    className="form-control"
    onChange={(e)=>setLastname(e.target.value)}
    />
  </div> <div className="mb-3">
    <label  className="form-label">age</label>
    <input 
    type="text" 
    className="form-control"
    onChange={(e)=>setAge(e.target.value)}
    />
  </div> <div className="mb-3">
    <label  className="form-label">Email</label>
    <input 
    type="text" 
    className="form-control"
    onChange={(e)=>setEmail(e.target.value)}
    />
  </div>
  <div className="mb-3">
    <label  className="form-label">Password</label>
    <input 
    type="email" 
    className="form-control"  
    onChange={(e)=>setPassword(e.target.value)}
    />
  </div>
  
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>
    </div>
  )
}

export default Create;
