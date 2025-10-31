import React, { useState } from 'react'
import google from "../assets/google.jpg"
import logo from "../assets/logo.jpg"
import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
function Signup() {
  const [show, setShow] = useState(false)
  const navigate = useNavigate()
  return (
    <>
      <div className='w-full h-full flex items-center justify-center bg-slate-100'>
              <div className='w-[60%] h-max m-4 flex rounded-2xl shadow'>
                <form className='w-[50%] p-8 bg-slate-200 rounded-[1rem_0_0_1rem] flex flex-col max-md:w-full max-md:rounded-2xl' action="">
                <h1 className='text-center text-xl font-bold'>Let's get Started</h1>
                <h3 className='text-center '>Create your account</h3>
                <label htmlFor="Name">Name</label>
                <input className='border rounded p-2 mb-4 outline-0 border-slate-400' type="text" id='Name' placeholder='Your Name'/>
                <label htmlFor="Email">Email</label>
                <input className='border rounded p-2 mb-4 outline-0 border-slate-400' type="email" id='Email' placeholder='Your email'/>
                <label htmlFor="number">Phone</label>
                <input className='border rounded p-2 mb-4 outline-0 border-slate-400' type="tel" id='number' placeholder='ex. 1234567890' maxLength={10}/>
                <div className='flex flex-col relative'>
                  <label htmlFor="Password">Password</label>
                  <input className='border rounded p-2 mb-4 outline-0 border-slate-400' type={show? "text": "password"} id='Password' placeholder='Your password' />
                {show? <FaRegEye className='absolute right-4 top-9' onClick={() => setShow(prev => !prev) }/>:
                <FaEyeSlash className='absolute right-4 top-9 ' onClick={() => setShow(prev => !prev) }/> }
                </div>
                <div className='flex items-center justify-between mt-2'>
                  <p className='w-[40%] border-2 font-semibold p-4 rounded-xl text-center border-slate-400 hover:border-black '>Student</p>
                  <p className='w-[40%] border-2 font-semibold p-4 rounded-xl text-center border-slate-400 hover:border-black'>Educator</p>
                </div>
                <button className=' bg-slate-800 text-white rounded p-2 mt-4 text-xl font-semibold'>Sign Up</button>
                <div className='flex items-center justify-center mt-6'>
                  <div className='w-[25%] border mr-4'></div>
                  <div>Or continue with</div>
                  <div className='w-[25%] border ml-4'></div>
                </div>
                <button className='flex items-center justify-center bg-white rounded p-2 mt-6 font-semibold '><span><img src={google} alt="" className='h-6'/></span>oogle</button>
                <p className='mt-4 text-center'>Already have an account? <span className='font-semibold' onClick={() => navigate("/login")}>Login</span></p>
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

export default Signup