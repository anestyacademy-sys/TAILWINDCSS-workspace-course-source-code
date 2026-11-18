export default function Forms() {
  return (
    <div className="max-w-2xl mx-auto">

      {/* Header card */}
      <div className="bg-linear-to-r from-indigo-600 to-indigo-700 rounded-xl p-6 mb-5 text-white shadow-lg shadow-indigo-200">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-white/20 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </div>
          <div>
            <h2 className="text-base font-bold">Create New User</h2>
            <p className="text-sm text-indigo-200 mt-0.5">Fill in the details to add a new team member</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">

        {/* ── Section 1 · Personal Information ── */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
          <h3 className="text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
            <span className="h-5 w-5 bg-indigo-100 text-indigo-600 rounded text-xs flex items-center justify-center font-bold">1</span>
            Personal Information
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* First Name — default state */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="John"
                defaultValue="John"
                className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-800 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all"
              />
            </div>

            {/* Last Name — error state */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Doe"
                defaultValue=""
                className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-800 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-red-300 transition-all"
              />
              
            </div>

            {/* Email — success state */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
               
                <input
                  type="email"
                  defaultValue="john@company.com"
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-300 transition-all"
                />
            
              </div>
             
            </div>

          </div>
        </div>

        {/* ── Section 2 · Role & Department ── */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
          <h3 className="text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
            <span className="h-5 w-5 bg-indigo-100 text-indigo-600 rounded text-xs flex items-center justify-center font-bold">2</span>
            Role & Department
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Role — select */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Role <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select className="w-full appearance-none pl-3 pr-8 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all cursor-pointer">
                  <option value="" disabled>Select role...</option>
                  <option selected>Editor</option>
                  <option>Admin</option>
                  <option>User</option>
                  <option>Viewer</option>
                </select>
                <svg className="w-3.5 h-3.5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Department — select */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">Department</label>
              <div className="relative">
                <select className="w-full appearance-none pl-3 pr-8 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all cursor-pointer">
                  <option value="">No department</option>
                  <option>Engineering</option>
                  <option selected>Design</option>
                  <option>Marketing</option>
                  <option>Sales</option>
                  <option>Support</option>
                </select>
                <svg className="w-3.5 h-3.5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Bio — textarea */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Bio <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <textarea
                rows={3}
                placeholder="Brief description about the user..."
                defaultValue="Passionate designer focused on clean interfaces and great user experiences."
                className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-800 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all resize-none"
              />
              <p className="text-xs text-gray-400 mt-1">68 / 200 characters</p>
            </div>

          </div>
        </div>

        {/* ── Actions ── */}
        <div className="flex items-center justify-between gap-3 pb-2">
          <button
            type="button"
            className="px-4 py-2.5 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 active:bg-gray-100 transition-colors"
          >
            Reset
          </button>
          <div className="flex gap-2">
            
            <button
              type="submit"
              className="px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white text-sm font-medium shadow-sm shadow-indigo-200 transition-colors flex items-center gap-2"
            >
              Create User
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
