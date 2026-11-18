
export default function Settings(){

    return(
        <div className="max-w-2xl mx-auto space-y-5" >

            {/* profile settings */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden" >
                <div className="px-5 py-4 border-b border-gray-100 bg-gray-50/50" >
                    <h3 className="text-sm font-semibold text-gray-900">Profile Settings</h3>
                    <p className="text-xs text-gray-500 mt-0.5" > Update your personal information</p>
                </div>

                <div className="p-5" >

                    {/* avatar */}
                    <div className="flex items-center gap-4 mb-5 pb-5 border-b border-gray-100" >
                        <div className="h-16 w-16 rounded-full bg-linear-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl  shadow-sm " >
                            JD
                        </div>

                        <div  >
                            <p className="text-sm font-semibold text-gray-800" >Profile Photo</p>
                            <p className="text-xs text-gray-500 mt-0.5 mb-2" >JPG, PNG or GIF · Max 2MB</p>
                            <button className="text-xs font-medium text-indigo-600 hover:text-indigo-800 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg transition-colors " >
                                Upload photo
                            </button>
                            <button className="ml-3 text-xs font-medium text-gray-600 hover:text-gray-800 bg-gray-50 hover:bg-gray-100 px-3 py-1.5 rounded-lg transition-colors " >
                                remove
                            </button>
                        </div>
                    </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-5 mb-5" >

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

                    <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5"> Phone number <span className="text-red-500" >*</span> </label>
                        <input type="text" placeholder="+216 ...." className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-800 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all"  />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5"> Job title <span className="text-red-500" >*</span> </label>
                        <input type="text" placeholder="Job title..." className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-800 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all"  />
                    </div>

                </div>

                <div className="flex items-center justify-end gap-3 pb-2 m-5" >
                    <button className="px-4 py-2.5 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors" >Discard</button>
                    <button className="px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium shadow-sm shadow-indigo-200 transition-colors" >Save changes</button>
                </div>

            </div>
            {/* change password */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden" >
                <div className="px-5 py-4 border-b border-gray-100 bg-gray-50/50" >
                    <h3 className="text-sm font-semibold text-gray-900">Change Password</h3>
                    <p className="text-xs text-gray-500 mt-0.5" >Use a strong password you don't use elsewhere</p>
                </div>

               

                <div className="grid grid-cols-1 gap-4 mx-5 m-5" >

                    <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5"> Current Password <span className="text-red-500" >*</span> </label>
                        <input type="password" placeholder="*****" className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-800 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all"  />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5"> New Password <span className="text-red-500" >*</span> </label>
                        <input type="password" placeholder="*****" className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-800 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all"  />
                    
                        <div className="flex items-center gap-1 mt-2" >
                            <div className="h-1 flex-1 rounded-full bg-emerald-500" />
                            <div className="h-1 flex-1 rounded-full bg-emerald-500" />
                            <div className="h-1 flex-1 rounded-full bg-emerald-500" />
                            <div className="h-1 flex-1 rounded-full bg-emerald-500" />
                            <span className="text-xs text-gray-500 ml-2" >Strong</span>
                        </div>
                    </div>



                    <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5"> Confirm Password <span className="text-red-500" >*</span> </label>
                        <input type="password" placeholder="*****" className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-800 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all"  />
                    </div>
                

                </div>

                <div className="flex items-center justify-end gap-3 pb-2 m-5" >
                    <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium shadow-sm shadow-indigo-200 transition-colors" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                        Update Password
                    </button>
                </div>

            </div>
        </div>
    )

}