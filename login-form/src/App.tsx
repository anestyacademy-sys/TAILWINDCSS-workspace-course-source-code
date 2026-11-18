import './App.css'

function App() {

  return (
    <div className='min-h-screen bg-gray-900 pt-40' >

        <div className='w-sm bg-white mx-auto p-8 rounded-2xl shadow-md' >

            <h1 className='text-2xl font-bold text-gray-800 mb-6' >Login Form</h1>

            <div className='space-y-4'>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>E-mail</label>
                  <input type="text" placeholder='example@gmail.com' className='w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-blue-500'  />
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>Password</label>
                  <input type="password" placeholder='********' className='w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-blue-500'  />
                </div>
            </div>

            <button className='w-full bg-blue-600 text-white font-semibold text-sm px-4 py-2 mt-4 rounded-lg hover:bg-blue-800 ' > Sign In </button>

        </div>

    </div>
  )
}

export default App
