
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Forms from './pages/Forms'
import Settings from './pages/Settings'


function Layout(){
  return (
    <div className='flex h-screen bg-gray-50 overflow-hidden' >

        <Sidebar />
        <div className=' flex flex-1 flex-col min-w-0 overflow-hidden ' >
            <Navbar />

            <main className='flex-1 overflow-y-auto bg-gray-50' >
                <div className='px-4 py-6 sm:px-6 lg:px-8' > 
                      <Outlet />
                </div>
            </main>
        </div>
    </div>
  )
}


function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<Navigate to="/dashboard" replace />}  />
              <Route path='dashboard' element={<Dashboard/>} />
              <Route path='users' element={<Users/>} />
              <Route path='forms' element={<Forms/>} />
              <Route path='settings' element={<Settings/>} />
          </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
