
import './App.css'

function App() {
 
  return (
    <div  className='min-h-screen bg-gray-200 flex justify-center items-center '>
      <div className='bg-white w-sm p-8 text-center  rounded-2xl space-y-4 flex flex-col items-center  '   >
        <img 
          src='https://i.pravatar.cc/150?img=12'
          alt='profile'
          className='w-24 h-24 rounded-full  ring-4 ring-blue-100'
        />

        <div className='space-y-1' >
          <h2 className='text-2xl font-bold text-gray-800' >John Doe</h2>
          <p className='text-sm text-gray-400 font-medium tracking-wide uppercase' >Senior web developer</p>
        </div>

        <p className='text-gray-500 text-sm leading-relaxed'>
          Passionate about crafting clean, intuitive interfaces. Loves design systems,
          typography, and the occasional cup of matcha.
        </p>

        <button className='mt-2 px-6 py-2 bg-blue-500 text-white rounded-full font-semibold text-sm hover:bg-blue-600 shadow-sm'>
          Follow
        </button>
      </div>
    </div>
  )
}

export default App
