import React, { useState } from 'react'
import google from "../assets/google.jpg"
import logo from "../assets/logo.jpg"
import { useNavigate } from 'react-router-dom'

function Login() {
  const [show , setShow] = useState(false)
  const navigate = useNavigate()
  return (
    <>
    <div className='w-full h-screen flex items-center justify-center bg-slate-100'>
        <div className='w-[60%] h-9/10 flex rounded-2xl shadow'>
          <form className='w-[50%] p-8 bg-slate-200 rounded-[1rem_0_0_1rem] flex flex-col max-md:w-full max-md:rounded-2xl' action="">
          <h1 className='text-center text-xl font-bold'>Welcome Back!</h1>
          <h3 className='text-center '>Login your account</h3>
          <label htmlFor="Email">Email</label>
          <input className='border rounded p-2 mb-4 outline-0 border-slate-400' type="email" id='Email' placeholder='Your email'/>
          <label htmlFor="Password">Password</label>
          <input className='border rounded p-2 mb-2 outline-0 border-slate-400' type="password" id='Password'  placeholder='Your password' />
          <a className='mb-4' href="/reset-password">Forgot password? <span className='text-blue-700 font-bold'>Reset</span></a>
          <button className=' bg-slate-400 rounded p-2 text-xl font-semibold' >Sign Up</button>
          <div className='flex items-center justify-center mt-6'>
            <div className='w-[25%] border mr-4'></div>
            <div>Or continue with</div>
            <div className='w-[25%] border ml-4'></div>
          </div>
          <button className='flex items-center justify-center bg-white rounded p-2 mt-6 font-semibold '><span><img src={google} alt="" className='h-6'/></span>oogle</button>
          <p className='text-center mt-4'>Don't have an account? <span className='hover:cursor-pointer' onClick={() => {navigate("/signup")}}>SignUp</span></p>
        </form>
        <div className='w-[50%] bg-black flex flex-col items-center justify-center rounded-[0_1rem_1rem_0] max-md:hidden'>
          <img src={logo} alt="" className='h-20' />
          <p className='text-2xl font-bold text-white'>VIRTUAL COURSES</p>
        </div>
        </div>
      </div>
    </>
  )
}

export default Login