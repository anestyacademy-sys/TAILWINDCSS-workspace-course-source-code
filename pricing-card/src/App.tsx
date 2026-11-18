import './App.css'

function App() {

  return (
    
    <div className='bg-gray-200 min-h-screen flex justify-center items-center' >
      <div className='w-sm bg-white p-8 shadow-md rounded-2xl space-y-6 flex flex-col' >

        <div>
          <p className='text-sm font-semibold uppercase text-blue-600' > Pro Plan </p>
        </div>

        <div>
          <span className='text-5xl font-extrabold text-gray-900' >$29</span>
          <span className='text-gray-500 text-base ml-1' >/month</span>
        </div>

        <hr className='border-gray-200' />

        <ul className='space-y-3' >
          <li className='text-gray-600 text-sm' > ✓ Unlimited projects</li>
          <li className='text-gray-600 text-sm' > ✓ Priority support</li>
          <li className='text-gray-600 text-sm' > ✓ Advanced analytics</li>
          <li className='text-gray-600 text-sm' > ✓ Advanced analytics</li>
          <li className='text-gray-600 text-sm' > ✓ Advanced analytics</li>
        </ul>

        <button className='w-full bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-800  ' >
          Get Started
        </button>

      </div>

    </div>

  )
}

export default App
