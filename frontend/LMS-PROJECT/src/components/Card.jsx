import img from '../assets/learning-boy.jpg'

function Card(props) {
    

    return (
        <>
            <div className='h-[20rem] w-[15rem] rounded-xl shadow-[0_4px_5px_rgba(0,0,0,0.1),0_-2px_5px_rgba(0,0,0,0.1)] shadow-blue-200 p-4'>
                <img src={img} alt="" className='rounded-xl'/>
                <h2 className='text-xl font-bold mt-4'>Web Dev</h2>
                <p>Learn Html, css, and javaScript in Detail</p>
                <div className='flex justify-between items-center mt-4'>
                    <button className='text-xl font-semibold bg-amber-200 px-4 py-1 text-slate-800 rounded-lg'>view</button>
                    <button className='text-xl font-semibold bg-green-600 px-4 py-1 text-white rounded-lg'>buy</button>
                </div>
            </div>
        </>
    )
}

export default Card;