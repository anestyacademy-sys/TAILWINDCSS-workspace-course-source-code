export default function Settings() {
  return (
    <div className="max-w-2xl mx-auto space-y-5">

      {/* ── Profile Settings ── */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100 bg-gray-50/50">
          <h3 className="text-sm font-semibold text-gray-900">Profile Settings</h3>
          <p className="text-xs text-gray-500 mt-0.5">Update your personal information</p>
        </div>

        <div className="p-5">
          {/* Avatar */}
          <div className="flex items-center gap-4 mb-5 pb-5 border-b border-gray-100">
            <div className="h-16 w-16 rounded-full bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold shadow-md shrink-0">
              JD
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">Profile Photo</p>
              <p className="text-xs text-gray-500 mt-0.5">JPG, PNG or GIF · Max 2MB</p>
              <div className="flex gap-2 mt-2">
                <button type="button" className="text-xs font-medium text-indigo-600 hover:text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg transition-colors">
                  Upload photo
                </button>
                <button type="button" className="text-xs font-medium text-gray-600 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg transition-colors">
                  Remove
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">First Name</label>
              <input
                type="text"
                defaultValue="John"
                className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">Last Name</label>
              <input
                type="text"
                defaultValue="Doe"
                className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">Email Address</label>
              <input
                type="email"
                defaultValue="john@company.com"
                className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">Phone</label>
              <input
                type="tel"
                defaultValue="+1 (555) 012-3456"
                className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">Job Title</label>
              <input
                type="text"
                defaultValue="Administrator"
                className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all"
              />
            </div>

        

          </div>

          <div className="mt-4 flex justify-end gap-2">
            <button type="button" className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
              Discard
            </button>
            <button type="button" className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium shadow-sm transition-colors">
              Save changes
            </button>
          </div>
        </div>
      </div>

    

      {/* ── Change Password ── */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100 bg-gray-50/50">
          <h3 className="text-sm font-semibold text-gray-900">Change Password</h3>
          <p className="text-xs text-gray-500 mt-0.5">Use a strong password you don't use elsewhere</p>
        </div>

        <div className="p-5 space-y-4">

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">Current Password</label>
            <input
              type="password"
              defaultValue="••••••••"
              className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">New Password</label>
            <input
              type="password"
              defaultValue="MyNewPass123"
              className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all"
            />
            {/* Strength indicator — strong */}
            <div className="mt-2 flex items-center gap-1">
              <div className="h-1 flex-1 rounded-full bg-emerald-500" />
              <div className="h-1 flex-1 rounded-full bg-emerald-500" />
              <div className="h-1 flex-1 rounded-full bg-emerald-500" />
              <div className="h-1 flex-1 rounded-full bg-emerald-500" />
              <span className="text-xs text-gray-500 ml-2">Strong</span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">Confirm New Password</label>
            <input
              type="password"
              defaultValue="MyNewPass123"
              className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all"
            />
          </div>

          <div className="flex justify-end">
            <button type="button" className="px-4 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium shadow-sm transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Update Password
            </button>
          </div>

        </div>
      </div>

    

    </div>
  )
}
