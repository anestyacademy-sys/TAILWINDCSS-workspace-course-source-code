import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="text-xs text-slate-400 mb-4 flex items-center gap-2">
            <button onClick={() => navigate("/")} className="hover:text-indigo-600 transition-colors">Home</button>
            <span>/</span>
            <button onClick={() => navigate("/cart")} className="hover:text-indigo-600 transition-colors">Cart</button>
            <span>/</span>
            <span className="text-slate-700 font-medium">Checkout</span>
          </nav>
          {/* Progress steps */}
          <div className="flex items-center gap-0">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold bg-emerald-500 text-white">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
              </div>
              <span className="text-xs font-medium text-slate-600 hidden sm:block">Cart</span>
            </div>
            <div className="w-8 sm:w-16 h-0.5 mx-2 rounded-full bg-emerald-400" />
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold bg-indigo-600 text-white">2</div>
              <span className="text-xs font-medium text-indigo-600 hidden sm:block">Details</span>
            </div>
            <div className="w-8 sm:w-16 h-0.5 mx-2 rounded-full bg-slate-200" />
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold bg-slate-100 text-slate-400">3</div>
              <span className="text-xs font-medium text-slate-400 hidden sm:block">Payment</span>
            </div>
            <div className="w-8 sm:w-16 h-0.5 mx-2 rounded-full bg-slate-200" />
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold bg-slate-100 text-slate-400">4</div>
              <span className="text-xs font-medium text-slate-400 hidden sm:block">Confirm</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* ── FORMS ── */}
          <div className="lg:col-span-2 space-y-6">

            {/* Contact */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-base font-bold text-slate-900 mb-5 flex items-center gap-2">
                <span className="w-6 h-6 bg-indigo-600 text-white rounded-full text-xs flex items-center justify-center font-bold">1</span>
                Contact Information
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">First Name</label>
                  <input type="text" placeholder="John" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-slate-400" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-slate-400" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-slate-400" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Phone Number</label>
                  <input type="tel" placeholder="+1 (555) 000-0000" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-slate-400" />
                </div>
              </div>
            </div>

            {/* Shipping */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-base font-bold text-slate-900 mb-5 flex items-center gap-2">
                <span className="w-6 h-6 bg-indigo-600 text-white rounded-full text-xs flex items-center justify-center font-bold">2</span>
                Shipping Address
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Street Address</label>
                  <input type="text" placeholder="123 Main Street, Apt 4B" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-slate-400" />
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">City</label>
                    <input type="text" placeholder="New York" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-slate-400" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">State</label>
                    <input type="text" placeholder="NY" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-slate-400" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">ZIP Code</label>
                    <input type="text" placeholder="10001" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-slate-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Country</label>
                  <select className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-700 bg-white">
                    <option>United States</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                    <option>Australia</option>
                    <option>France</option>
                  </select>
                </div>
                {/* Shipping methods */}
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-3">Shipping Method</label>
                  <div className="space-y-2.5">
                    <label className="flex items-center gap-3 border border-indigo-600 bg-indigo-50/50 rounded-xl px-4 py-3 cursor-pointer">
                      <input type="radio" name="shipping" defaultChecked className="accent-indigo-600" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-slate-800">Free Shipping</p>
                        <p className="text-xs text-slate-400">5–7 business days</p>
                      </div>
                      <span className="text-sm font-semibold text-emerald-600">Free</span>
                    </label>
                    <label className="flex items-center gap-3 border border-slate-200 rounded-xl px-4 py-3 cursor-pointer hover:border-indigo-400 transition-colors">
                      <input type="radio" name="shipping" className="accent-indigo-600" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-slate-800">Standard Shipping</p>
                        <p className="text-xs text-slate-400">3–5 business days</p>
                      </div>
                      <span className="text-sm font-semibold text-slate-700">$9.99</span>
                    </label>
                    <label className="flex items-center gap-3 border border-slate-200 rounded-xl px-4 py-3 cursor-pointer hover:border-indigo-400 transition-colors">
                      <input type="radio" name="shipping" className="accent-indigo-600" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-slate-800">Express Shipping</p>
                        <p className="text-xs text-slate-400">1–2 business days</p>
                      </div>
                      <span className="text-sm font-semibold text-slate-700">$24.99</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-base font-bold text-slate-900 mb-5 flex items-center gap-2">
                <span className="w-6 h-6 bg-indigo-600 text-white rounded-full text-xs flex items-center justify-center font-bold">3</span>
                Payment Method
              </h2>
              <div className="flex gap-3 mb-5">
                <button className="flex-1 py-2.5 text-xs font-semibold rounded-xl border-2 border-indigo-600 bg-indigo-50 text-indigo-700">Credit Card</button>
                <button className="flex-1 py-2.5 text-xs font-semibold rounded-xl border-2 border-slate-200 text-slate-500 hover:border-slate-300 transition-colors">PayPal</button>
                <button className="flex-1 py-2.5 text-xs font-semibold rounded-xl border-2 border-slate-200 text-slate-500 hover:border-slate-300 transition-colors">Apple Pay</button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Name on Card</label>
                  <input type="text" placeholder="John Doe" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-slate-400" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Card Number</label>
                  <input type="text" placeholder="1234 5678 9012 3456" maxLength={19} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-slate-400" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Expiry Date</label>
                    <input type="text" placeholder="MM / YY" maxLength={7} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-slate-400" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">CVV</label>
                    <input type="text" placeholder="•••" maxLength={4} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-slate-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── ORDER SUMMARY ── */}
          <div>
            <div className="bg-white rounded-2xl shadow-sm p-5">
              <h3 className="text-sm font-bold text-slate-900 mb-4">Order Summary</h3>
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 shrink-0">
                    <img src="https://picsum.photos/seed/headphones/80/80" alt="" className="w-full h-full object-cover rounded-lg" />
                    <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-slate-700 text-white text-xs rounded-full flex items-center justify-center font-bold">1</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-slate-800 leading-snug truncate">Premium Wireless Headphones</p>
                  </div>
                  <span className="text-sm font-semibold text-slate-900 shrink-0">$149.99</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 shrink-0">
                    <img src="https://picsum.photos/seed/shoes2025/80/80" alt="" className="w-full h-full object-cover rounded-lg" />
                    <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-slate-700 text-white text-xs rounded-full flex items-center justify-center font-bold">2</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-slate-800 leading-snug truncate">Smart Running Shoes</p>
                  </div>
                  <span className="text-sm font-semibold text-slate-900 shrink-0">$259.98</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 shrink-0">
                    <img src="https://picsum.photos/seed/speaker2025/80/80" alt="" className="w-full h-full object-cover rounded-lg" />
                    <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-slate-700 text-white text-xs rounded-full flex items-center justify-center font-bold">1</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-slate-800 leading-snug truncate">Smart Home Speaker</p>
                  </div>
                  <span className="text-sm font-semibold text-slate-900 shrink-0">$89.99</span>
                </div>
              </div>
              <div className="border-t border-slate-100 pt-3 space-y-2 mb-4">
                <div className="flex justify-between text-xs text-slate-500">
                  <span>Subtotal</span><span>$499.96</span>
                </div>
                <div className="flex justify-between text-xs text-slate-500">
                  <span>Shipping</span><span className="text-emerald-600 font-medium">Free</span>
                </div>
                <div className="flex justify-between text-xs text-slate-500">
                  <span>Tax (8%)</span><span>$40.00</span>
                </div>
              </div>
              <div className="border-t border-slate-200 pt-3 flex justify-between mb-5">
                <span className="font-bold text-slate-900 text-sm">Total</span>
                <span className="text-lg font-extrabold text-slate-900">$539.96</span>
              </div>
              <button onClick={() => navigate("/")} className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors text-sm">
                Place Order — $539.96
              </button>
              <div className="flex items-center justify-center gap-1.5 mt-4 text-xs text-slate-400">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                Secured by 256-bit SSL encryption
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
