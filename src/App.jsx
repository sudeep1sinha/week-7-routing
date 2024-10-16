
import { lazy, Suspense } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'

const Dashboard= lazy(()=>import('./components/Dashboard'))
const Landing = lazy(() =>import('./components/Landing'))


function App() {
  
  

  return (
    
    <div>
    <BrowserRouter>
    <Appbar/>
    <Routes>
      <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard/></Suspense>}/>
      <Route path="/" element={<Suspense fallback={"loading..."}><Landing/></Suspense>}/>
    </Routes>

    </BrowserRouter>
    </div>
    
    
  )

}
function Appbar(){
  const navigate= useNavigate();

  return <div>

      <div style={{background:"black" , color:"white"}}>
        <button onClick={()=>{
          navigate("/");
        }}>Landing page</button>

        <button onClick={()=>{
          navigate("/dashboard");
        }}>Dashboard</button>
      </div>

      </div>
}

export default App
