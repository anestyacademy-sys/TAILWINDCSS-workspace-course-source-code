import { Link } from "react-router-dom";

export default function Sidebar(){

    return(
        <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-gray-200 shrink-0" >
            
            {/* logo */}
            <div className="flex h-16 items-center gap-2.5 px-5 border-b border-gray-100 shrink-0" >
                <span className="text-sm font-bold text-gray-900 tracking-tight " >AdminPanel</span>
            </div>

            {/* navigation */}

            <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-5" >
                {/* overview */}

                <div>
                    <p className="mb-1 px-2 text-[10px] font-semibold uppercase tracking-widest text-gray-400 " >Overview</p>

                    <div className="space-y-0.5" >

                        <Link to="/dashboard" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium bg-indigo-50 text-indigo-700"  >
                            <svg  className="w-5 h-5 text-indigo-700 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>

                            Dashboard
                        </Link>

                        <Link to="/users" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium  text-gray-600 hover:bg-gray-100 hover:text-gray-900  transition-colors "  >
                            <svg className="w-5 h-5 text-gray-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                            </svg>
                            Users
                        </Link>
                    </div>
                </div>


                  {/* management */}

                <div>
                    <p className="mb-1 px-2 text-[10px] font-semibold uppercase tracking-widest text-gray-400 " >Management</p>

                    <div className="space-y-0.5" >

                        <Link to="/forms" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium  text-gray-600 hover:bg-gray-100 hover:text-gray-900  transition-colors "  >
                            <svg className="w-5 h-5 text-gray-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                            </svg>

                            Create user
                        </Link>

                        <Link to="/settings" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium  text-gray-600 hover:bg-gray-100 hover:text-gray-900  transition-colors "  >
                            <svg className="w-5 h-5 text-gray-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>

                            Setting
                        </Link>
                    </div>
                </div>

                  {/* Analytics */}

                <div>
                    <p className="mb-1 px-2 text-[10px] font-semibold uppercase tracking-widest text-gray-400 " >Analytics</p>

                    <div className="space-y-0.5" >

                        <Link to="/forms" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium  text-gray-300  transition-colors  cursor-not-allowed select-none "  >
                            <svg className="w-5 h-5 text-gray-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                            </svg>


                            Reports

                            <span className="ml-auto text-xs font-medium bg-gray-100 text-gray-400 px-1.5 py-0.5 rounded" >soon</span>
                        </Link>

                        <Link to="/settings" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium  text-gray-300   transition-colors cursor-not-allowed select-none "  >
                           <svg className="w-5 h-5 text-gray-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                                 <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                            </svg>


                            Analytics

                            <span className="ml-auto text-xs font-medium bg-gray-100 text-gray-400 px-1.5 py-0.5 rounded" >soon</span>

                        </Link>
                    </div>
                </div>
            </nav>


            {/* bottom user */}

            <div className="shrink-0 border-t border-gray-100 p-3 " >

                <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-sm " >JD</div>

                    <div className="min-w-0" >
                        <p className="truncate text-sm font-semibold text-gray-800" >John Doe</p>
                        <p className="truncate text-xs text-gray-500" >Administrator</p>
                    </div>
                
                </div>

              
            </div>

        </aside>
    )

}