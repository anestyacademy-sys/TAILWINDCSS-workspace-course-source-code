
export default function Forms(){

    return(
        <div className="max-w-2xl mx-auto" >
            
            {/* header card */}

            <div className="bg-linear-to-r from-indigo-500 to-indigo-800  rounded-xl p-6 mb-5 text-white shadow-lg shadow-indigo-200" >
                <div className="flex items-center gap-3" > 
                    <div className="h-10 w-10 rounded-lg bg-white/20 flex items-center justify-center " >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                        </svg>

                    </div>

                    <div>
                        <h2 className="text-base font-bold" >Create New User</h2>
                        <p className="text-sm text-indigo-200 mt-0.5" >Fill in the details to add a new team member</p>
                    </div>
                </div>
            </div>


            <div className="space-y-4" >

                {/* Personal Information */}
                <div className="bg-white rounded-xl  border border-gray-200 shadow-sm p-5 " >
                    <h2 className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-4 " >
                        <span className="h-5 w-5 rounded bg-indigo-100 text-indigo-600 text-xs flex justify-center items-center font-bold" >1</span>
                        Personal Information
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" >
                        <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-1.5"> First Name <span className="text-red-500" >*</span> </label>
                            <input type="text" placeholder="John" className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-800 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all"  />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-1.5"> Last Name <span className="text-red-500" >*</span> </label>
                            <input type="text" placeholder="John" className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-800 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all"  />
                        </div>

                        <div className="col-span-2">
                            <label className="block text-xs font-semibold text-gray-700 mb-1.5"> E-mail <span className="text-red-500" >*</span> </label>
                            <input type="text" placeholder="John@gmail.com" className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-800 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all"  />
                        </div>


                    </div>
                </div>


                {/* Personal Information */}
                <div className="bg-white rounded-xl  border border-gray-200 shadow-sm p-5 " >
                    <h2 className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-4 " >
                        <span className="h-5 w-5 rounded bg-indigo-100 text-indigo-600 text-xs flex justify-center items-center font-bold" >2</span>
                        Role & Department
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" >

                        <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-1.5"> Role <span className="text-red-500" >*</span> </label>
                            <select className="w-full px-3 pr-5 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-800 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all">
                                <option value="">Select Role..</option>
                                <option value="">Admin</option>
                                <option value="">Editor</option>
                                <option value="">User</option>
                                <option value="">Visitor</option>
                            </select>

                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-1.5"> Department <span className="text-red-500" >*</span> </label>
                            <select className="w-full px-3 pr-5 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-800 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all">
                                <option value="">Select Dep..</option>
                                <option value="">IT</option>
                                <option value="">Design</option>
                                <option value="">Sales</option>
                                <option value="">Marketing</option>
                            </select>

                        </div>


                        <div className="col-span-2" >
                            <label className="block text-xs font-semibold text-gray-700 mb-1.5"> Bio (optional) </label>
                            <textarea name="" id="" placeholder="enter bio here ..."  rows={3} className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-800 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all"  ></textarea>
                            <p className="text-xs text-gray-400 mt-1" >89 / 200 characters</p>
                        </div>

                    </div>
                </div>


                <div className="flex items-center justify-between gap-3 pb-2" >
                    <button className="px-4 py-2.5 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors" >Reset</button>
                    <button className="px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium shadow-sm shadow-indigo-200 transition-colors" >Create user</button>
                </div>

            </div>

        </div>
    )

}