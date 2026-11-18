import { Link } from "react-router-dom";

export default function Navbar(){

    return(
        <header className="shrink-0 bg-white border-b border-gray-200 h-16 flex items-center px-4 sm:px-6 gap-4 z-10" >

            {/* page title */}
            <div>
                <h1 className="text-[15px] font-semibold text-gray-900 leading-none " >Dashboard</h1>
                <p className="text-xs text-gray-500 mt-0.5" >Welcome back, John 👋</p>
            </div>

            {/* spacer */}
            <div className="flex-1" />

            {/* search */}

            <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 w-56 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:bg-white transition-all" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className="w-4 h-4 text-gray-400 shrink-0 " >
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>

                <input type="text"  placeholder="search ..." className="bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none w-full"  />
            </div>


            {/* notification */}

            <button  className="relative p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>

                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"  />
            </button>

             <Link to="/settings" >

                <div className="flex items-center gap-3 px-2 py-1.5 hover:bg-gray-100 transition-colors rounded-lg">
                    <div className="h-8 w-8 rounded-full bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-sm " >JD</div>

                    <div className="min-w-0" >
                        <p className="truncate text-sm font-semibold text-gray-800" >John Doe</p>
                        <p className="truncate text-xs text-gray-500" >Administrator</p>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 text-gray-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>

                </div>
              
            </Link>

        </header>
    )

}