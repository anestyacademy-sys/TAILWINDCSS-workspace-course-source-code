
export default function Dashboard(){

    return(
        <div className="space-y-6" >

            {/* stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 " >

                {/* revenue */}
                <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow" >

                    <div className="flex items-start justify-between ">
                        <div>
                            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide" >Total Revenue</p>
                            <p className="mt-2 text-2xl font-bold text-gray-900" >$334,223</p>
                        </div>

                        <div className="bg-indigo-50 p-2.5 rounded-lg" >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 text-indigo-600">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                        </div>
                    </div>
                </div>
                {/* users */}
                <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow" >

                    <div className="flex items-start justify-between ">
                        <div>
                            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide" >Active Users</p>
                            <p className="mt-2 text-2xl font-bold text-gray-900" >223</p>
                        </div>

                        <div className="bg-blue-50 p-2.5 rounded-lg" >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 text-blue-600">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                            </svg>


                        </div>
                    </div>
                </div>
                {/* total orders */}
                <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow" >

                    <div className="flex items-start justify-between ">
                        <div>
                            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide" >Total Orders</p>
                            <p className="mt-2 text-2xl font-bold text-gray-900" >4,223</p>
                        </div>

                        <div className="bg-emerald-50 p-2.5 rounded-lg" >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 text-emerald-600">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>


                        </div>
                    </div>
                </div>
                {/* grouth rate */}
                <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow" >

                    <div className="flex items-start justify-between ">
                        <div>
                            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide" >Grouth rate</p>
                            <p className="mt-2 text-2xl font-bold text-gray-900" >23%</p>
                        </div>

                        <div className="bg-amber-50 p-2.5 rounded-lg" >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 text-amber-600">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                            </svg>


                        </div>
                    </div>
                </div>
            </div>


            {/* chart + activity */}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4" >

                {/* chart */}
                <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-5 shadow-sm " >

                    <div className="mb-6" >
                        <h2 className="text-sm font-semibold text-gray-900" >Revenue Overview</h2>
                        <p className="text-xs text-gray-500 mt-0.5" >Monthly revenue for 2026</p>
                    </div>

                    <div className="flex items-end gap-1.5 h-40" >

                            <div className="flex-1 flex flex-col items-center gap-1 group" >
                                <div className="relative w-full flex flex-col justify-end" style={{height:'136px'}}  >
                                    <div  className="w-full bg-indigo-200 hover:bg-indigo-400 rounded-t-md transition-colors" style={{height: '75px'}}  />
                                </div>
                                <span className="text-xs text-gray-400" >Jan</span>
                            </div>
                            <div className="flex-1 flex flex-col items-center gap-1 group" >
                                <div className="relative w-full flex flex-col justify-end" style={{height:'136px'}}  >
                                    <div  className="w-full bg-indigo-200 hover:bg-indigo-400 rounded-t-md transition-colors" style={{height: '95px'}}  />
                                </div>
                                <span className="text-xs text-gray-400" >Feb</span>
                            </div>
                            <div className="flex-1 flex flex-col items-center gap-1 group" >
                                <div className="relative w-full flex flex-col justify-end" style={{height:'136px'}}  >
                                    <div  className="w-full bg-indigo-200 hover:bg-indigo-400 rounded-t-md transition-colors" style={{height: '120px'}}  />
                                </div>
                                <span className="text-xs text-gray-400" >Mar</span>
                            </div>
                            <div className="flex-1 flex flex-col items-center gap-1 group" >
                                <div className="relative w-full flex flex-col justify-end" style={{height:'136px'}}  >
                                    <div  className="w-full bg-indigo-200 hover:bg-indigo-400 rounded-t-md transition-colors" style={{height: '30px'}}  />
                                </div>
                                <span className="text-xs text-gray-400" >Apr</span>
                            </div>
                            <div className="flex-1 flex flex-col items-center gap-1 group" >
                                <div className="relative w-full flex flex-col justify-end" style={{height:'136px'}}  >
                                    <div  className="w-full bg-indigo-200 hover:bg-indigo-400 rounded-t-md transition-colors" style={{height: '65px'}}  />
                                </div>
                                <span className="text-xs text-gray-400" >Mai</span>
                            </div>
                            <div className="flex-1 flex flex-col items-center gap-1 group" >
                                <div className="relative w-full flex flex-col justify-end" style={{height:'136px'}}  >
                                    <div  className="w-full bg-indigo-600 rounded-t-md transition-colors" style={{height: '125px'}}  />
                                </div>
                                <span className="text-xs text-gray-400" >Jun</span>
                            </div>
                            <div className="flex-1 flex flex-col items-center gap-1 group" >
                                <div className="relative w-full flex flex-col justify-end" style={{height:'136px'}}  >
                                    <div  className="w-full bg-indigo-200 hover:bg-indigo-400 rounded-t-md transition-colors" style={{height: '22px'}}  />
                                </div>
                                <span className="text-xs text-gray-400" >Jul</span>
                            </div>
                            <div className="flex-1 flex flex-col items-center gap-1 group" >
                                <div className="relative w-full flex flex-col justify-end" style={{height:'136px'}}  >
                                    <div  className="w-full bg-indigo-200 hover:bg-indigo-400 rounded-t-md transition-colors" style={{height: '88px'}}  />
                                </div>
                                <span className="text-xs text-gray-400" >Aug</span>
                            </div>
                            <div className="flex-1 flex flex-col items-center gap-1 group" >
                                <div className="relative w-full flex flex-col justify-end" style={{height:'136px'}}  >
                                    <div  className="w-full bg-indigo-200 hover:bg-indigo-400 rounded-t-md transition-colors" style={{height: '100px'}}  />
                                </div>
                                <span className="text-xs text-gray-400" >Sep</span>
                            </div>
                            <div className="flex-1 flex flex-col items-center gap-1 group" >
                                <div className="relative w-full flex flex-col justify-end" style={{height:'136px'}}  >
                                    <div  className="w-full bg-indigo-200 hover:bg-indigo-400 rounded-t-md transition-colors" style={{height: '16px'}}  />
                                </div>
                                <span className="text-xs text-gray-400" >Oct</span>
                            </div>
                            <div className="flex-1 flex flex-col items-center gap-1 group" >
                                <div className="relative w-full flex flex-col justify-end" style={{height:'136px'}}  >
                                    <div  className="w-full bg-indigo-200 hover:bg-indigo-400 rounded-t-md transition-colors" style={{height: '10px'}}  />
                                </div>
                                <span className="text-xs text-gray-400" >Nov</span>
                            </div>
                            <div className="flex-1 flex flex-col items-center gap-1 group" >
                                <div className="relative w-full flex flex-col justify-end" style={{height:'136px'}}  >
                                    <div  className="w-full bg-indigo-200 hover:bg-indigo-400 rounded-t-md transition-colors" style={{height: '50px'}}  />
                                </div>
                                <span className="text-xs text-gray-400" >Dec</span>
                            </div>

                    </div>


                    <div className="mt-4 pt-4 border-t border-gray-100 flex gap-4" >

                        <div className="flex items-center gap-1.5" >
                            <span className="w-2.5 h-2.5 rounded-sm bg-indigo-600" ></span>
                            <span className="text-xs text-gray-500" >Peak month (Jun)</span>
                        </div>

                        <div className="flex items-center gap-1.5" >
                            <span className="w-2.5 h-2.5 rounded-sm bg-indigo-200" ></span>
                            <span className="text-xs text-gray-500" >Other months</span>
                        </div>
                    </div>

                </div>


                <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm " >

                    <div className="mb-6" >
                        <h2 className="text-sm font-semibold text-gray-900" >Recent Activity</h2>
                    </div>

                    <div className="space-y-4" >

                        <div className="flex items-start gap-3" >
                            <div className="bg-pink-500 w-7 h-7 rounded-full flex items-center  justify-center text-white text-sm font-bold shrink-0 mt-0.5 " >SJ</div>
                            <div className="min-w-0" >
                                <p className="text-xs font-semibold text-gray-800 truncate" >Sara Johnson</p>
                                <p className="text-xs text-gray-500 mt-0.5" >Created a new account</p>
                                <p className="text-[10px] text-gray-400 mt-0.5" >2 min ago</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3" >
                            <div className="bg-blue-500 w-7 h-7 rounded-full flex items-center  justify-center text-white text-sm font-bold shrink-0 mt-0.5 " >MW</div>
                            <div className="min-w-0" >
                                <p className="text-xs font-semibold text-gray-800 truncate" >Sara Johnson</p>
                                <p className="text-xs text-gray-500 mt-0.5" >Created a new account</p>
                                <p className="text-[10px] text-gray-400 mt-0.5" >2 min ago</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3" >
                            <div className="bg-amber-500 w-7 h-7 rounded-full flex items-center  justify-center text-white text-sm font-bold shrink-0 mt-0.5 " >EC</div>
                            <div className="min-w-0" >
                                <p className="text-xs font-semibold text-gray-800 truncate" >Sara Johnson</p>
                                <p className="text-xs text-gray-500 mt-0.5" >Created a new account</p>
                                <p className="text-[10px] text-gray-400 mt-0.5" >2 min ago</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3" >
                            <div className="bg-emerald-500 w-7 h-7 rounded-full flex items-center  justify-center text-white text-sm font-bold shrink-0 mt-0.5 " >TD</div>
                            <div className="min-w-0" >
                                <p className="text-xs font-semibold text-gray-800 truncate" >Sara Johnson</p>
                                <p className="text-xs text-gray-500 mt-0.5" >Created a new account</p>
                                <p className="text-[10px] text-gray-400 mt-0.5" >2 min ago</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3" >
                            <div className="bg-purple-500 w-7 h-7 rounded-full flex items-center  justify-center text-white text-sm font-bold shrink-0 mt-0.5 " >LP</div>
                            <div className="min-w-0" >
                                <p className="text-xs font-semibold text-gray-800 truncate" >Sara Johnson</p>
                                <p className="text-xs text-gray-500 mt-0.5" >Created a new account</p>
                                <p className="text-[10px] text-gray-400 mt-0.5" >2 min ago</p>
                            </div>
                        </div>

                    </div>


                    <button className="mt-4 w-full text-xs font-medium text-indigo-600 hover:text-indigo-700 py-2 border border-dashed border-indigo-200 rounded-lg hover:bg-indigo-50 transition-colors " >
                        View all activity →
                    </button>

                </div>
            </div>


            <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-5 shadow-sm " >

                    <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100" >

                        <div className="mb-6" >
                            <h2 className="text-sm font-semibold text-gray-900" >Recent Orders</h2>
                            <p className="text-xs text-gray-500 mt-0.5" >Latest 5 transactions</p>
                        </div>

                        <button className="text-xs font-medium text-indigo-600 hover:text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg transition-colors" >View All</button>
                    </div>

                    <div className="overflow-x-auto" >
                        <table className="w-full text-sm" >
                            <thead>
                                <tr className="bg-gray-50 text-xs font-semibold text-gray-500 uppercase tracking-wide" >
                                    <th className="px-5 py-3 text-left" >Order</th>
                                    <th className="px-5 py-3 text-left" >Customer</th>
                                    <th className="px-5 py-3 text-left hidden md:table-cell " >Date</th>
                                    <th className="px-5 py-3 text-left" >Amount</th>
                                    <th className="px-5 py-3 text-left" >Status</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-100" >

                                <tr className="hover:bg-gray-50 transition-colors" > 
                                    <td className="px-5 py-3 font-medium text-gray-900" >#ORD-4821</td>
                                    <td className="px-5 py-3" >
                                        <p className="font-medium text-gray-900">Mark Wilson</p>
                                        <p className="text-xs text-gray-500" >mark@gmail.com</p>
                                    </td>
                                    <td className="px-5 py-3 font-medium text-gray-900 hidden md:table-cell" >Apr 12, 2026</td>
                                    <td className="px-5 py-3 font-medium text-gray-900" >$99.00</td>
                                    <td className="px-5 py-3 font-medium text-gray-900" >
                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 ring-1 ring-blue-200 " >Processing</span>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors" > 
                                    <td className="px-5 py-3 font-medium text-gray-900" >#ORD-4821</td>
                                    <td className="px-5 py-3" >
                                        <p className="font-medium text-gray-900">Mark Wilson</p>
                                        <p className="text-xs text-gray-500" >mark@gmail.com</p>
                                    </td>
                                    <td className="px-5 py-3 font-medium text-gray-900 hidden md:table-cell" >Apr 12, 2026</td>
                                    <td className="px-5 py-3 font-medium text-gray-900" >$99.00</td>
                                    <td className="px-5 py-3 font-medium text-gray-900" >
                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 ring-1 ring-blue-200 " >Processing</span>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors" > 
                                    <td className="px-5 py-3 font-medium text-gray-900" >#ORD-4821</td>
                                    <td className="px-5 py-3" >
                                        <p className="font-medium text-gray-900">Mark Wilson</p>
                                        <p className="text-xs text-gray-500" >mark@gmail.com</p>
                                    </td>
                                    <td className="px-5 py-3 font-medium text-gray-900 hidden md:table-cell" >Apr 12, 2026</td>
                                    <td className="px-5 py-3 font-medium text-gray-900" >$99.00</td>
                                    <td className="px-5 py-3 font-medium text-gray-900" >
                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 ring-1 ring-blue-200 " >Processing</span>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors" > 
                                    <td className="px-5 py-3 font-medium text-gray-900" >#ORD-4821</td>
                                    <td className="px-5 py-3" >
                                        <p className="font-medium text-gray-900">Mark Wilson</p>
                                        <p className="text-xs text-gray-500" >mark@gmail.com</p>
                                    </td>
                                    <td className="px-5 py-3 font-medium text-gray-900 hidden md:table-cell" >Apr 12, 2026</td>
                                    <td className="px-5 py-3 font-medium text-gray-900" >$99.00</td>
                                    <td className="px-5 py-3 font-medium text-gray-900" >
                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 ring-1 ring-blue-200 " >Processing</span>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors" > 
                                    <td className="px-5 py-3 font-medium text-gray-900" >#ORD-4821</td>
                                    <td className="px-5 py-3" >
                                        <p className="font-medium text-gray-900">Mark Wilson</p>
                                        <p className="text-xs text-gray-500" >mark@gmail.com</p>
                                    </td>
                                    <td className="px-5 py-3 font-medium text-gray-900 hidden md:table-cell" >Apr 12, 2026</td>
                                    <td className="px-5 py-3 font-medium text-gray-900" >$99.00</td>
                                    <td className="px-5 py-3 font-medium text-gray-900" >
                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 ring-1 ring-blue-200 " >Processing</span>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors" > 
                                    <td className="px-5 py-3 font-medium text-gray-900" >#ORD-4821</td>
                                    <td className="px-5 py-3" >
                                        <p className="font-medium text-gray-900">Mark Wilson</p>
                                        <p className="text-xs text-gray-500" >mark@gmail.com</p>
                                    </td>
                                    <td className="px-5 py-3 font-medium text-gray-900 hidden md:table-cell" >Apr 12, 2026</td>
                                    <td className="px-5 py-3 font-medium text-gray-900" >$99.00</td>
                                    <td className="px-5 py-3 font-medium text-gray-900" >
                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 ring-1 ring-blue-200 " >Processing</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

            </div>

        </div>
    )

}