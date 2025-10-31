// import { useState } from 'react'
import img from './assets/learning-boy.jpg'
import Card from './components/Card.jsx'
import { AboutUs ,Mission, Offer, WhyChooseUs, ContactUs } from './components/HomeComponent/About.jsx'
import Navbar from './components/Navbar.jsx'
import { Footer } from './components/Footer.jsx'
// import TeacherRegister from './Pages/auth/Signup.jsx'

function App(props) {

  return <>
    <header id='navigation' className='h-max mx-4 p-3 flex justify-between items-center rounded-bl-2xl rounded-br-2xl shadow-blue-700 shadow sticky top-0 z-50 bg-indigo-500'>
      <Navbar />
    </header>
    <main>
      <section id="hero" className="h-max max-w-full m-4 p-6 flex flex-col md:flex-row items-center justify-between rounded-2xl border-blue-400 shadow shadow-blue-500">
        <div className="w-full md:w-1/2  text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-blue-700 font-bold leading-snug drop-shadow-md drop-shadow-blue-300">Welcome to the E-learning platform</h1>
          <p className="mt-3 font-medium text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600">Learn anytime, anywhere</p>
          <button className="bg-blue-600 text-white px-5 py-3 text-base sm:text-lg md:text-xl font-semibold rounded-lg mt-8 shadow-lg shadow-indigo-300">Get Started</button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center p-4">
          <img className="w-full md:w-3/4 lg:w-2/3 rounded-2xl shadow-md shadow-blue-100" src={img} alt=""/>
        </div>
      </section>

      <section id='aboutUs' className='h-max m-4 p-4 flex items-center justify-between rounded-2xl border-blue-400 shadow shadow-blue-500'>
        <AboutUs />
      </section>

      <section id='ourMission' className='h-max m-4 p-3 flex items-center justify-between rounded-2xl border-blue-400 shadow shadow-blue-500'>
        <Mission />
      </section>

      <section id='whatWeOffer' className='h-max m-4 p-3 flex items-center justify-between rounded-2xl border-blue-400 shadow shadow-blue-500'>
        <Offer />
      </section>

      <section id='whyChooseUs' className='h-max m-4 p-3 flex items-center justify-between rounded-2xl border-blue-400 shadow shadow-blue-500'>
        <WhyChooseUs />
      </section>

      <section id='courses' className='h-max m-4 p-4 rounded-2xl shadow shadow-blue-500'>
        <div className='mb-6'>
          
        <h1 className="text-5xl font-bold text-blue-700 drop-shadow-lg drop-shadow-blue-300 text-center mb-4">Our Courses</h1>
        <p className='text-center text-lg font-semibold text-gray-600 mb-6'>Explore our wide range of courses designed to help you achieve your learning goals.</p>
        </div>
        <div className='grid justify-around grid-cols-4 gap-8'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        </div>
        <div className='text-center mt-6'>
          <button className='bg-blue-600 text-white px-5 py-3 text-base sm:text-lg md:text-xl font-semibold rounded-lg mt-8 shadow-lg shadow-indigo-300 mx-auto block'>View All Courses</button>
        </div>
      </section>

      <section id='testimonials' className='h-max m-4 p-4 rounded-2xl shadow shadow-blue-500'>
        <div className='mb-6'>
        <h1 className="text-5xl font-bold text-blue-700 drop-shadow-lg drop-shadow-blue-300 text-center mb-4">What Our Students Say</h1>
        <p className='text-center text-lg font-semibold text-gray-600 mb-6'>Hear from our students about their learning experiences on our platform.</p>
        </div>
        <div className='grid justify-around grid-cols-3 gap-4'>
          <div className='p-4 border rounded-lg shadow-md shadow-blue-100'>
            <p className='italic text-gray-600'>"This platform has transformed the way I learn. The courses are engaging and the instructors are top-notch!"</p>
            <h3 className='mt-4 font-bold text-blue-700'>- Alex J.</h3>
          </div>
          <div className='p-4 border rounded-lg shadow-md shadow-blue-100'>
            <p className='italic text-gray-600'>"I love the flexibility of learning at my own pace. The community support is also fantastic!"</p>
            <h3 className='mt-4 font-bold text-blue-700'>- Maria S.</h3>
          </div>
          <div className='p-4 border rounded-lg shadow-md shadow-blue-100'>
            <p className='italic text-gray-600'>"The variety of courses available has helped me upskill and advance my career significantly."</p>
            <h3 className='mt-4 font-bold text-blue-700'>- John D.</h3>
          </div>
        </div>
      </section>

      
      <section id='contactUs' className='h-max m-4 p-4 rounded-2xl shadow shadow-blue-500 flex flex-col items-center '>
        <ContactUs />
      </section>
    </main>

    <footer className='h-max text-white text-lg font-semibold grid grid-cols-4 mx-4 p-4 rounded-[1rem_1rem_0_0] bg-indigo-500 shadow shadow-blue-500 '> 
      <Footer /> 
    </footer>
  </>
}

export default App