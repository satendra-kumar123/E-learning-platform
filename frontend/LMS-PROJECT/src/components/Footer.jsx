import logo from '../assets/logo.webp'
import {social} from '../components/HomeComponent/SocialLinks.jsx'
export function Footer () {
  return (
    <>
        <div className=''>
        <img src={logo} alt="" className='w-20 rounded-lg shadow-md shadow-blue-400'/>
      </div>
      <div className='grid'>
        <a href="" className='text-xl font-bold'>Home</a>
        <a href="">Benefits</a>
        <a href="">Our Courses</a>
        <a href="">Our Testimonials</a>
      </div>
      <div className='grid'>
        <a href="" className='text-xl font-bold'>About Us</a>
        <a href="">Company</a>
        <a href="">Achievements</a>
        <a href="">Our Goals</a>
      </div>
      <div className='grid grid-cols-2'>
        <h2 className='col-span-2 text-xl font-bold'>Social Profiles</h2>
        <div className='grid grid-cols-3 text-2xl '>
          {social()}
        </div>
      </div> <hr className='col-span-4 m-4'/>
      <div className='col-span-4 m-4 text-center'>&copy; 2025 E-learning. All rights reserved.</div>    
    </>
  )
}