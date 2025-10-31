import { useState } from 'react'
import {Routes, Route, } from "react-router-dom"
import Home from "./pages/Home.jsx"
import SignUp from "./pages/Signup.jsx"
import Login from "./pages/Login.jsx"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App
