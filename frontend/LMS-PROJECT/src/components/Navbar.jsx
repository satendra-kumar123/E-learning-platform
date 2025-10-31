import logo from '../assets/logo.webp'

function navigation(props) {
  return(
    <>
    <a className='text-xl font-semibold text-white hover:border-b-2' href="#">{props}</a>
    </>
  )
}

function Navbar() {
  return (
    <>
              <div>
              <img src={logo} alt="logo" className='w-20 rounded-xl shadow-md shadow-blue-400'/>
              </div>
              <div className='flex gap-x-8 items-center'>
                {navigation('Home')}
                {navigation('Courses')}
                {navigation('About')}
                {navigation('Contact')}
              </div>
              <div className='flex gap-8'>
                <button className='text-lg font-bold p-2 rounded-lg text-white hover:shadow-md cursor-pointer shadow-indigo-700 '>Login</button>
                <button className='text-lg font-bold p-2 rounded-lg text-white shadow-md cursor-pointer hover:shadow-indigo-700 '>SignUp</button>
              </div>
    </>
  );
}

export default Navbar;