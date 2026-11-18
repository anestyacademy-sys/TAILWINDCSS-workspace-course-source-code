export default function Dashboard() {
  return (
    <div className="space-y-6">

      {/* ── Stats ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

        {/* Revenue */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Total Revenue</p>
              <p className="mt-2 text-2xl font-bold text-gray-900">$48,295</p>
            </div>
            <div className="bg-indigo-50 p-2.5 rounded-lg">
              <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        
        </div>

        {/* Active Users */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Active Users</p>
              <p className="mt-2 text-2xl font-bold text-gray-900">2,847</p>
            </div>
            <div className="bg-blue-50 p-2.5 rounded-lg">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
          
        </div>

        {/* Total Orders */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Total Orders</p>
              <p className="mt-2 text-2xl font-bold text-gray-900">1,429</p>
            </div>
            <div className="bg-emerald-50 p-2.5 rounded-lg">
              <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
          </div>
         
        </div>

        {/* Growth Rate */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Growth Rate</p>
              <p className="mt-2 text-2xl font-bold text-gray-900">24.8%</p>
            </div>
            <div className="bg-amber-50 p-2.5 rounded-lg">
              <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
          </div>
          
        </div>

      </div>

      {/* ── Chart + Activity ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        {/* Bar Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-sm font-semibold text-gray-900">Revenue Overview</h2>
              <p className="text-xs text-gray-500 mt-0.5">Monthly revenue for 2026</p>
            </div>
           
          </div>

          <div className="flex items-end gap-1.5 h-40">

            <div className="flex-1 flex flex-col items-center gap-1 group">
              <div className="relative w-full flex flex-col justify-end" style={{ height: '136px' }}>
                <div className="w-full bg-indigo-200 hover:bg-indigo-400 rounded-t-md transition-colors" style={{ height: '75px' }} />
              </div>
              <span className="text-[10px] text-gray-400">Jan</span>
            </div>

            <div className="flex-1 flex flex-col items-center gap-1 group">
              <div className="relative w-full flex flex-col justify-end" style={{ height: '136px' }}>
                <div className="w-full bg-indigo-200 hover:bg-indigo-400 rounded-t-md transition-colors" style={{ height: '95px' }} />
              </div>
              <span className="text-[10px] text-gray-400">Feb</span>
            </div>

            <div className="flex-1 flex flex-col items-center gap-1 group">
              <div className="relative w-full flex flex-col justify-end" style={{ height: '136px' }}>
                <div className="w-full bg-indigo-200 hover:bg-indigo-400 rounded-t-md transition-colors" style={{ height: '65px' }} />
              </div>
              <span className="text-[10px] text-gray-400">Mar</span>
            </div>

            <div className="flex-1 flex flex-col items-center gap-1 group">
              <div className="relative w-full flex flex-col justify-end" style={{ height: '136px' }}>
                <div className="w-full bg-indigo-200 hover:bg-indigo-400 rounded-t-md transition-colors" style={{ height: '111px' }} />
              </div>
              <span className="text-[10px] text-gray-400">Apr</span>
            </div>

            <div className="flex-1 flex flex-col items-center gap-1 group">
              <div className="relative w-full flex flex-col justify-end" style={{ height: '136px' }}>
                <div className="w-full bg-indigo-200 hover:bg-indigo-400 rounded-t-md transition-colors" style={{ height: '88px' }} />
              </div>
              <span className="text-[10px] text-gray-400">May</span>
            </div>

            <div className="flex-1 flex flex-col items-center gap-1 group">
              <div className="relative w-full flex flex-col justify-end" style={{ height: '136px' }}>
                <div className="w-full bg-indigo-600 rounded-t-md" style={{ height: '122px' }} />
              </div>
              <span className="text-[10px] text-gray-400">Jun</span>
            </div>

            <div className="flex-1 flex flex-col items-center gap-1 group">
              <div className="relative w-full flex flex-col justify-end" style={{ height: '136px' }}>
                <div className="w-full bg-indigo-200 hover:bg-indigo-400 rounded-t-md transition-colors" style={{ height: '99px' }} />
              </div>
              <span className="text-[10px] text-gray-400">Jul</span>
            </div>

            <div className="flex-1 flex flex-col items-center gap-1 group">
              <div className="relative w-full flex flex-col justify-end" style={{ height: '136px' }}>
                <div className="w-full bg-indigo-200 hover:bg-indigo-400 rounded-t-md transition-colors" style={{ height: '106px' }} />
              </div>
              <span className="text-[10px] text-gray-400">Aug</span>
            </div>

            <div className="flex-1 flex flex-col items-center gap-1 group">
              <div className="relative w-full flex flex-col justify-end" style={{ height: '136px' }}>
                <div className="w-full bg-indigo-200 hover:bg-indigo-400 rounded-t-md transition-colors" style={{ height: '116px' }} />
              </div>
              <span className="text-[10px] text-gray-400">Sep</span>
            </div>

            <div className="flex-1 flex flex-col items-center gap-1 group">
              <div className="relative w-full flex flex-col justify-end" style={{ height: '136px' }}>
                <div className="w-full bg-indigo-200 hover:bg-indigo-400 rounded-t-md transition-colors" style={{ height: '82px' }} />
              </div>
              <span className="text-[10px] text-gray-400">Oct</span>
            </div>

            <div className="flex-1 flex flex-col items-center gap-1 group">
              <div className="relative w-full flex flex-col justify-end" style={{ height: '136px' }}>
                <div className="w-full bg-indigo-200 hover:bg-indigo-400 rounded-t-md transition-colors" style={{ height: '129px' }} />
              </div>
              <span className="text-[10px] text-gray-400">Nov</span>
            </div>

            <div className="flex-1 flex flex-col items-center gap-1 group">
              <div className="relative w-full flex flex-col justify-end" style={{ height: '136px' }}>
                <div className="w-full bg-indigo-200 hover:bg-indigo-400 rounded-t-md transition-colors" style={{ height: '120px' }} />
              </div>
              <span className="text-[10px] text-gray-400">Dec</span>
            </div>

          </div>

          <div className="mt-4 pt-4 border-t border-gray-100 flex gap-4">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-sm bg-indigo-600" />
              <span className="text-xs text-gray-500">Peak month (Jun)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-sm bg-indigo-200" />
              <span className="text-xs text-gray-500">Other months</span>
            </div>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">

            <div className="flex items-start gap-3">
              <div className="bg-pink-500 h-7 w-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0 mt-0.5">SJ</div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-gray-800 truncate">Sara Johnson</p>
                <p className="text-xs text-gray-500 mt-0.5">Created a new account</p>
                <p className="text-[10px] text-gray-400 mt-0.5">2 min ago</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-blue-500 h-7 w-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0 mt-0.5">MW</div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-gray-800 truncate">Mark Wilson</p>
                <p className="text-xs text-gray-500 mt-0.5">Updated billing info</p>
                <p className="text-[10px] text-gray-400 mt-0.5">18 min ago</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-emerald-500 h-7 w-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0 mt-0.5">EC</div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-gray-800 truncate">Emily Chen</p>
                <p className="text-xs text-gray-500 mt-0.5">Submitted order #4821</p>
                <p className="text-[10px] text-gray-400 mt-0.5">1 hr ago</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-amber-500 h-7 w-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0 mt-0.5">TD</div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-gray-800 truncate">Tom Davis</p>
                <p className="text-xs text-gray-500 mt-0.5">Password changed</p>
                <p className="text-[10px] text-gray-400 mt-0.5">3 hr ago</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-purple-500 h-7 w-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0 mt-0.5">LP</div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-gray-800 truncate">Lisa Park</p>
                <p className="text-xs text-gray-500 mt-0.5">Role changed to Editor</p>
                <p className="text-[10px] text-gray-400 mt-0.5">5 hr ago</p>
              </div>
            </div>

          </div>
          <button className="mt-4 w-full text-xs font-medium text-indigo-600 hover:text-indigo-700 py-2 border border-dashed border-indigo-200 rounded-lg hover:bg-indigo-50 transition-colors">
            View all activity →
          </button>
        </div>

      </div>

      {/* ── Recent Orders ── */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div>
            <h2 className="text-sm font-semibold text-gray-900">Recent Orders</h2>
            <p className="text-xs text-gray-500 mt-0.5">Latest 5 transactions</p>
          </div>
          <button className="text-xs font-medium text-indigo-600 hover:text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg transition-colors">
            View all
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                <th className="px-5 py-3 text-left">Order</th>
                <th className="px-5 py-3 text-left">Customer</th>
                <th className="px-5 py-3 text-left hidden md:table-cell">Date</th>
                <th className="px-5 py-3 text-left">Amount</th>
                <th className="px-5 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">

              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-5 py-3.5 font-medium text-gray-900">#ORD-4821</td>
                <td className="px-5 py-3.5"><p className="font-medium text-gray-800">Sara Johnson</p><p className="text-xs text-gray-500">sara@example.com</p></td>
                <td className="px-5 py-3.5 text-gray-500 hidden md:table-cell">Apr 12, 2026</td>
                <td className="px-5 py-3.5 font-semibold text-gray-800">$249.00</td>
                <td className="px-5 py-3.5"><span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200">Completed</span></td>
              </tr>

              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-5 py-3.5 font-medium text-gray-900">#ORD-4820</td>
                <td className="px-5 py-3.5">
                  <p className="font-medium text-gray-800">Mark Wilson</p>
                  <p className="text-xs text-gray-500">mark@example.com</p>
                </td>
                <td className="px-5 py-3.5 text-gray-500 hidden md:table-cell">Apr 12, 2026</td>
                <td className="px-5 py-3.5 font-semibold text-gray-800">$99.00</td>
                <td className="px-5 py-3.5">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 ring-1 ring-blue-200">Processing</span></td>
              </tr>

              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-5 py-3.5 font-medium text-gray-900">#ORD-4819</td>
                <td className="px-5 py-3.5"><p className="font-medium text-gray-800">Emily Chen</p><p className="text-xs text-gray-500">emily@example.com</p></td>
                <td className="px-5 py-3.5 text-gray-500 hidden md:table-cell">Apr 11, 2026</td>
                <td className="px-5 py-3.5 font-semibold text-gray-800">$599.00</td>
                <td className="px-5 py-3.5"><span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200">Completed</span></td>
              </tr>

              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-5 py-3.5 font-medium text-gray-900">#ORD-4818</td>
                <td className="px-5 py-3.5"><p className="font-medium text-gray-800">Tom Davis</p><p className="text-xs text-gray-500">tom@example.com</p></td>
                <td className="px-5 py-3.5 text-gray-500 hidden md:table-cell">Apr 11, 2026</td>
                <td className="px-5 py-3.5 font-semibold text-gray-800">$149.00</td>
                <td className="px-5 py-3.5"><span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 ring-1 ring-amber-200">Pending</span></td>
              </tr>

              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-5 py-3.5 font-medium text-gray-900">#ORD-4817</td>
                <td className="px-5 py-3.5"><p className="font-medium text-gray-800">Lisa Park</p><p className="text-xs text-gray-500">lisa@example.com</p></td>
                <td className="px-5 py-3.5 text-gray-500 hidden md:table-cell">Apr 10, 2026</td>
                <td className="px-5 py-3.5 font-semibold text-gray-800">$349.00</td>
                <td className="px-5 py-3.5"><span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-700 ring-1 ring-red-200">Cancelled</span></td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}
