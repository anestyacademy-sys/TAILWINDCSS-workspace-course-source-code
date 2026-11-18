
export default function Users(){

    return(
        <div className="space-y-5" >

            {/* header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4" >

                <div>
                    <h2 className="text-lg font-bold text-gray-900" >Team Members</h2>
                    <p className="text-sm text-gray-500 mt-0.5" >8 total users</p>
                </div>

                <button className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-800 text-white text-sm font-medium px-4 py-2.5 rounded-lg shadow-sm transition-colors" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 t" >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Add user
                </button>
            </div>

            {/* filters */}

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4" >

                <div className="flex flex-col sm:flex-row gap-3" >

                    <div className=" flex-1 hidden md:flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 w-56 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:bg-white transition-all" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className="w-4 h-4 text-gray-400 shrink-0 " >
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>

                        <input type="text"  placeholder="search users ..." className="bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none w-full"  />
                    </div>

                    <div className="relative" >
                        <select className="appearance-none pl-3 pr-8 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer">
                            <option value="">All Roles</option>
                            <option value="">Admin</option>
                            <option value="">Editor</option>
                            <option value="">User</option>
                            <option value="">Viewer</option>
                        </select>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1.5 pointer-events-none">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>

                    </div>

                    <div className="relative" >
                        <select className="appearance-none pl-3 pr-8 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer">
                            <option value="">All Status</option>
                            <option value="">Active</option>
                            <option value="">Suspended</option>
                            <option value="">Pending</option>
                        </select>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1.5 pointer-events-none">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>

                    </div>

                </div>
            </div>

            {/* table */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden " >

                <div className="overflow-x-auto" >

                    <table className="w-full text-sm" >
                        <thead>
                            <tr className="bg-gray-50 text-xs font-semibold text-gray-500 uppercase border-b border-b-gray-200" >
                                <th className="px-5 py-3.5 text-left" >User</th>
                                <th className="px-5 py-3.5 text-left" >Role</th>
                                <th className="px-5 py-3.5 text-left" >Status</th>
                                <th className="px-5 py-3.5 text-left" >Joined</th>
                                <th className="px-5 py-3.5 text-right" >Actions</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-100" >
                            <tr className="hover:bg-gray-50 transition-colors" >
                                <td className="px-5 py-4" >
                                    <div className="flex items-center gap-2.5" >
                                        <div className="bg-pink-500 h-9 w-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-sm" >SJ</div>
                                        <div>
                                            <p className="font-semibold text-gray-800" >Sara Johnson</p>
                                            <p className="text-xs text-gray-500" >sara@gmail.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-5 py-4" >
                                    <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-indigo-50 text-indigo-700" >Admin</span>
                                </td>
                                <td className="px-5 py-4" >
                                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200" >
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"  />
                                        active
                                    </span>
                                </td>
                                <td className="px-5 py-4 text-gray-500" >Jan 12, 2025</td>
                                <td className="px-5 py-4" >
                                    <div className="flex items-center justify-end gap-1" >
                                        <button className="p-1.5 rounded-lg text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors" >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                            </svg>

                                        </button>
                                        <button className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors" >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>

                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors" >
                                <td className="px-5 py-4" >
                                    <div className="flex items-center gap-2.5" >
                                        <div className="bg-pink-500 h-9 w-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-sm" >SJ</div>
                                        <div>
                                            <p className="font-semibold text-gray-800" >Sara Johnson</p>
                                            <p className="text-xs text-gray-500" >sara@gmail.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-5 py-4" >
                                    <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-indigo-50 text-indigo-700" >Admin</span>
                                </td>
                                <td className="px-5 py-4" >
                                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200" >
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"  />
                                        active
                                    </span>
                                </td>
                                <td className="px-5 py-4 text-gray-500" >Jan 12, 2025</td>
                                <td className="px-5 py-4" >
                                    <div className="flex items-center justify-end gap-1" >
                                        <button className="p-1.5 rounded-lg text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors" >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                            </svg>

                                        </button>
                                        <button className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors" >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>

                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors" >
                                <td className="px-5 py-4" >
                                    <div className="flex items-center gap-2.5" >
                                        <div className="bg-pink-500 h-9 w-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-sm" >SJ</div>
                                        <div>
                                            <p className="font-semibold text-gray-800" >Sara Johnson</p>
                                            <p className="text-xs text-gray-500" >sara@gmail.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-5 py-4" >
                                    <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-indigo-50 text-indigo-700" >Admin</span>
                                </td>
                                <td className="px-5 py-4" >
                                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200" >
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"  />
                                        active
                                    </span>
                                </td>
                                <td className="px-5 py-4 text-gray-500" >Jan 12, 2025</td>
                                <td className="px-5 py-4" >
                                    <div className="flex items-center justify-end gap-1" >
                                        <button className="p-1.5 rounded-lg text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors" >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                            </svg>

                                        </button>
                                        <button className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors" >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>

                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors" >
                                <td className="px-5 py-4" >
                                    <div className="flex items-center gap-2.5" >
                                        <div className="bg-pink-500 h-9 w-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-sm" >SJ</div>
                                        <div>
                                            <p className="font-semibold text-gray-800" >Sara Johnson</p>
                                            <p className="text-xs text-gray-500" >sara@gmail.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-5 py-4" >
                                    <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-indigo-50 text-indigo-700" >Admin</span>
                                </td>
                                <td className="px-5 py-4" >
                                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200" >
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"  />
                                        active
                                    </span>
                                </td>
                                <td className="px-5 py-4 text-gray-500" >Jan 12, 2025</td>
                                <td className="px-5 py-4" >
                                    <div className="flex items-center justify-end gap-1" >
                                        <button className="p-1.5 rounded-lg text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors" >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                            </svg>

                                        </button>
                                        <button className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors" >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>

                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors" >
                                <td className="px-5 py-4" >
                                    <div className="flex items-center gap-2.5" >
                                        <div className="bg-pink-500 h-9 w-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-sm" >SJ</div>
                                        <div>
                                            <p className="font-semibold text-gray-800" >Sara Johnson</p>
                                            <p className="text-xs text-gray-500" >sara@gmail.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-5 py-4" >
                                    <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-indigo-50 text-indigo-700" >Admin</span>
                                </td>
                                <td className="px-5 py-4" >
                                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200" >
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"  />
                                        active
                                    </span>
                                </td>
                                <td className="px-5 py-4 text-gray-500" >Jan 12, 2025</td>
                                <td className="px-5 py-4" >
                                    <div className="flex items-center justify-end gap-1" >
                                        <button className="p-1.5 rounded-lg text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors" >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                            </svg>

                                        </button>
                                        <button className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors" >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>

                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors" >
                                <td className="px-5 py-4" >
                                    <div className="flex items-center gap-2.5" >
                                        <div className="bg-pink-500 h-9 w-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-sm" >SJ</div>
                                        <div>
                                            <p className="font-semibold text-gray-800" >Sara Johnson</p>
                                            <p className="text-xs text-gray-500" >sara@gmail.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-5 py-4" >
                                    <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-indigo-50 text-indigo-700" >Admin</span>
                                </td>
                                <td className="px-5 py-4" >
                                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200" >
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"  />
                                        active
                                    </span>
                                </td>
                                <td className="px-5 py-4 text-gray-500" >Jan 12, 2025</td>
                                <td className="px-5 py-4" >
                                    <div className="flex items-center justify-end gap-1" >
                                        <button className="p-1.5 rounded-lg text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors" >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                            </svg>

                                        </button>
                                        <button className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors" >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>

                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors" >
                                <td className="px-5 py-4" >
                                    <div className="flex items-center gap-2.5" >
                                        <div className="bg-pink-500 h-9 w-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-sm" >SJ</div>
                                        <div>
                                            <p className="font-semibold text-gray-800" >Sara Johnson</p>
                                            <p className="text-xs text-gray-500" >sara@gmail.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-5 py-4" >
                                    <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-indigo-50 text-indigo-700" >Admin</span>
                                </td>
                                <td className="px-5 py-4" >
                                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200" >
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"  />
                                        active
                                    </span>
                                </td>
                                <td className="px-5 py-4 text-gray-500" >Jan 12, 2025</td>
                                <td className="px-5 py-4" >
                                    <div className="flex items-center justify-end gap-1" >
                                        <button className="p-1.5 rounded-lg text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors" >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                            </svg>

                                        </button>
                                        <button className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors" >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>

                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors" >
                                <td className="px-5 py-4" >
                                    <div className="flex items-center gap-2.5" >
                                        <div className="bg-pink-500 h-9 w-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-sm" >SJ</div>
                                        <div>
                                            <p className="font-semibold text-gray-800" >Sara Johnson</p>
                                            <p className="text-xs text-gray-500" >sara@gmail.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-5 py-4" >
                                    <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-indigo-50 text-indigo-700" >Admin</span>
                                </td>
                                <td className="px-5 py-4" >
                                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200" >
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"  />
                                        active
                                    </span>
                                </td>
                                <td className="px-5 py-4 text-gray-500" >Jan 12, 2025</td>
                                <td className="px-5 py-4" >
                                    <div className="flex items-center justify-end gap-1" >
                                        <button className="p-1.5 rounded-lg text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors" >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                            </svg>

                                        </button>
                                        <button className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors" >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>

                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>

            </div>


        </div>
    )

}