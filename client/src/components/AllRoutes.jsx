import { Route, Routes } from 'react-router-dom';
import AllNotes from './AllNotes';
import CreateNote from './createNotes';
import Login from './login';
import Register from './Register';

const AllRoutes = () => {
  return (
    <>
      
      <Routes>
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} /> 
          <Route path="/createnote" element={<CreateNote/>} />
          <Route path="/allnotes" element={<AllNotes/>} />
         </Routes>
    </>
  )
}

export default AllRoutes
