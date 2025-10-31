import girl3 from '../../assets/girl3.jpg'
import boy from '../../assets/boy.jpg'
import mission from '../../assets/mission.jpg'
import selection from '../../assets/whychooseus.jpg'
import {SocialLinks} from './SocialLinks.jsx'

function AboutUs() {
    return (
        <>
            <div className='text-justify w-1/2 font-medium'>
                <h1 className='w-max text-5xl font-bold text-blue-700 drop-shadow-md  drop-shadow-blue-400'>About Us</h1>
                <p className='pt-4 text-xl text-slate-500'>
                <span className='text-2xl font-bold'>Welcome to our <span className='text-blue-600'>E-Learning Platform</span></span><br /> where learning meets innovation.
                Our mission is to provide high-quality education that is accessible, flexible, and engaging for learners of all backgrounds.
                </p>  
            </div>
            <div className='w-1/2 items-center flex justify-end'>
                <img src={girl3} alt="" className='w-[60%] rounded-2xl' />
            </div>
        </>
    )
}

function Mission() {
    return (
        <>
            <div className='w-1/2'>
                <img src={mission} alt="" className='w-[50%] rounded-2xl' />
            </div>
            <div className='w-1/2 text-justify'>
                <h2 className='text-5xl text-red-500 font-bold drop-shadow-md drop-shadow-red-300'>Our Mission</h2>
                <p className='text-xl font-semibold text-slate-500 mt-4'>Our mission is to transform traditional learning into an engaging, flexible, and accessible experience for everyone. We aim to bridge the gap between knowledge and real-world application by providing courses that are practical, interactive, and aligned with current industry standards.</p>
            </div>
        </>
    )
}

function Offer () {
    return (
        <>
        <div className='w-1/2 text-justify text-xl font-medium'>
            <h1 className='text-5xl font-bold text mb-3 text-amber-600 drop-shadow-md drop-shadow-amber-300'>What We Offer</h1>
            <ul>
                <li className='font-semibold text-gray-600 text-md'><span className='text-blue-400 text-xl font-semibold'>📚 Diverse Courses:</span> Covering academics, professional skills, and personal development.</li>
                <li className='font-semibold text-gray-600 text-md'><span className='text-blue-400 text-xl font-semibold'>🎯 Interactive Learning:</span> Engaging quizzes, assignments, and real-time progress tracking.</li>
                <li className='font-semibold text-gray-600 text-md'><span className='text-blue-400 text-xl font-semibold'>🤝 Supportive Community:</span> Connect with peers, share ideas, and grow together.</li>
                <li className='font-semibold text-gray-600 text-md'><span className='text-blue-400 text-xl font-semibold'>🏆 Expert Instructors:</span> Learn from experienced educators and industry professionals.</li>
                <li className='font-semibold text-gray-600 text-md'><span className='text-blue-400 text-xl font-semibold'>📝 Certifications:</span> Earn certificates to showcase your skills and achievements.</li>
            </ul>
        </div>
        <div className='w-1/2 flex justify-end items-center'>
            <img src={boy} alt="" className='w-[50%] rounded-2xl'/>
        </div>
        </>
    )
}

function WhyChooseUs () {
    return (
        <>
        <div className='w-1/2 flex justify-start items-center'>
            <img src={selection} alt="" className='w-[50%] rounded-2xl'/>
        </div>
        <div className='w-1/2 text-justify text-xl font-medium'>
            <h1 className='text-5xl text-lime-700 font-bold mb-3 drop-shadow-md drop-shadow-lime-300'>Why Choose Us</h1>
        <ul>
          <li className='font-semibold text-gray-600 text-md'><span className='text-blue-400 text-xl font-semibold'>🎓 Experienced Instructors:</span> Learn from skilled educators and industry experts.</li>
          <li className='font-semibold text-gray-600 text-md'><span className='text-blue-400 text-xl font-semibold'>📈 Updated Content:</span> Courses are regularly updated to match current trends and standards.</li>
          <li className='font-semibold text-gray-600 text-md'><span className='text-blue-400 text-xl font-semibold'>🏆 Skill Development Focus:</span> Not just knowledge, but practical skills for real-world success.</li>
          <li className='font-semibold text-gray-600 text-md'><span className='text-blue-400 text-xl font-semibold'>🤝 Community Support:</span> Collaborate, discuss, and grow with a network of learners.</li>
          <li className='font-semibold text-gray-600 text-md'><span className='text-blue-400 text-xl font-semibold'>🔒 Trusted & Reliable:</span> Committed to providing high-quality, authentic educational content.</li>
        </ul>
        </div>
        </>
    )
}


function ContactUs() {
    return (
        <>
        <div className='flex justify-between mb-4 items-center border-b w-full pb-4'>
        <h1 className='w-1/2 text-5xl font-bold drop-shadow-md drop-shadow-blue-400 text-blue-700'>Contact us</h1>
        <p className='w-1/2 text-lg text-gray-700 text-justify'>We’re here to help and answer any questions you might have. Reach out to us through the form below, email, or phone, and our team will get back to you as soon as possible. Your feedback and queries are always welcome!</p>
      </div>
      <div className='flex justify-between items-center w-full p-4 rounded-2xl mt-8'>
        <form action="" className='w-1/2 grid grid-cols-2 gap-10 shadow shadow-indigo-500 rounded-xl p-4'>
          <input className='h-10 p-4 rounded-lg shadow outline-0 shadow-indigo-300 font-semibold' type="text" placeholder='Enter your first name' required/>
          <input className=' h-10 p-4 rounded-lg shadow outline-0 shadow-indigo-300 font-semibold' type="text" placeholder='Enter your last name'required/>
          <input className=' h-10 p-4 rounded-lg shadow outline-0 shadow-indigo-300 font-semibold' type="email" placeholder='Enter your email'required/>
          <input className=' h-10 p-4 rounded-lg shadow outline-0 shadow-indigo-300 font-semibold' type="number" placeholder='Enter your phone no.' required/>
          <input className=' h-10 p-4 rounded-lg shadow col-span-2 outline-0 shadow-indigo-300 font-semibold' type="text" placeholder='Enter your Subject'/>
          <textarea className='h-40 outline-0 shadow shadow-indigo-300 text-xl text-slate-600 p-4 w-full rounded-lg col-span-2' placeholder='Enter your message here....'></textarea>
          <button className='h-max w-max shadow-md shadow-slate-400 bg-amber-400 p-4 rounded-md font-semibold text-white'>Send your message</button>
        </form>
        <div className='w-1/2 flex flex-col gap-4 justify-center items-center'>
          <SocialLinks />
        </div>
      </div>
        </>
    )
}

export {AboutUs, Mission, Offer, WhyChooseUs, ContactUs}