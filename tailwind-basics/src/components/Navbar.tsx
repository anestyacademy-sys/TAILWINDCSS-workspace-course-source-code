import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="shrink-0 bg-white border-b border-gray-200 h-16 flex items-center px-4 sm:px-6 gap-4 z-10">

      {/* Page title */}
      <div>
        <h1 className="text-[15px] font-semibold text-gray-900 leading-none">Dashboard</h1>
        <p className="text-xs text-gray-500 mt-0.5">Welcome back, John 👋</p>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Search */}
      <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 w-56 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:bg-white transition-all">
        <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none w-full"
        />
      </div>

      {/* Notifications */}
      <button className="relative p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
      </button>

      {/* Profile */}
      <Link to="/settings" className="flex items-center gap-2.5 rounded-lg px-3  py-1.5 hover:bg-gray-100 transition-colors">
        <div className="h-8 w-8 rounded-full bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold shadow-sm">
          JD
        </div>
        <div className="hidden sm:block text-left">
          <p className="text-sm font-semibold text-gray-800 leading-none">John Doe</p>
          <p className="text-xs text-gray-500 mt-0.5">Administrator</p>
        </div>
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </Link>

    </header>
  )
}
