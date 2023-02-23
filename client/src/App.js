import './App.css';
import AllRoutes from './components/AllRoutes';
import Navbar from './components/Navbar';

// import Create from './components/Create';
// import Read from './components/Read';
// import Update from './components/Update';

function App() {
  return (
    <div >
         {/* <Routes>
          <Route path="/create" element={<Create/>} />
          <Route path="/read" element={<Read/>} />
          <Route path="/update" element={<Update/>} />

         </Routes> */}
         <Navbar/>
       <AllRoutes/>
    </div>
  );
}

export default App;
