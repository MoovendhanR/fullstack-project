import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



const CreateNote=()=>{
    const [title,setTitle]=useState("")
    const [notes,setNote]=useState("")
   const [category,setCategory]=useState("")
   const navigate = useNavigate()

      const handleSubmit=(e)=>{
        e.preventDefault()
          const payload={
            notes,
            title,
            category
          }
        //   console.log(payload)

          fetch("http://localhost:5000/notes/create",{
             method:"POST",
             body:JSON.stringify(payload),
             headers:{
                "Content-type": "application/json",
                 "Authorization":localStorage.getItem("token")
             }
          })
          .then(res=>res.json())
          .then(res=>console.log(res))
          .then(()=>navigate("/allnotes"))
      }
    //   fetch("http://localhost:5000/users/")
    //   .then(res=>
    //    res.json())
    //  .then(res=>console.log(res))
    //  .catch(err=>console.log(err))
    return(
        <>
           <Link to="/allnotes"><button>AllNotes</button></Link>

           <h1>this is CreateNote page</h1>
           <input type="text" placeholder="Enter title"value={title}onChange={(e)=>setTitle(e.target.value)}/>
           <input type="text" placeholder="Enter note" value={notes} onChange={(e)=>setNote(e.target.value)}/>
           <input type="text" placeholder="Enter category" value={category} onChange={(e)=>setCategory(e.target.value)}/>
           <button onClick={handleSubmit}>Add Notes</button>
        </>
    )
}

export default CreateNote;
