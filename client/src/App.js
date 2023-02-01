import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllNotes from './components/AllNotes';
import CreateNote from './components/createNotes';
import Login from './components/login';
import Register from './components/Register';
// import Create from './components/Create';
// import Read from './components/Read';
// import Update from './components/Update';

function App() {
  return (
    <div className="container">
         {/* <Routes>
          <Route path="/create" element={<Create/>} />
          <Route path="/read" element={<Read/>} />
          <Route path="/update" element={<Update/>} />

         </Routes> */}

<Routes>
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} /> 
          <Route path="/createnote" element={<CreateNote/>} />
          <Route path="/allnotes" element={<AllNotes/>} />

         </Routes>
       
    </div>
  );
}

export default App;
