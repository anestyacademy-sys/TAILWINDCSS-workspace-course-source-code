import { useNavigate } from "react-router-dom";

export default function Cart(){

    const navigate = useNavigate();


    return(

        <div className="bg-slate-50 min-h-screen" >


            {/* page header */}
            <div className="bg-white border-b border-slate-200" >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" >
                    <nav className="text-xs text-slate-400 mb-3 flex items-center gap-2" >
                        <button className="hover:text-indigo-600 transition-colors" onClick={()=>navigate("/")}  >Home</button>
                        <span>/</span>
                        <span className="text-slate-700 font-medium" >Shopping cart</span>
                    </nav>

                    <div className="flex items-center justify-between" >
                        <h1 className="text-3xl font-bold text-slate-900" >Shopping Cart</h1>
                        <p className="text-slate-500 mt-1" >3 items</p>
                    </div>
                </div>
            </div>


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" >

                <div className="grid lg:grid-cols-3 gap-8">



                    {/* cart items */}

                    <div className="lg:col-span-2 space-y-4" >

                        {/* item1 */}
                        <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-5 flex gap-4" >
                            <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-xl overflow-hidden bg-slate-100 cursor-pointer" onClick={()=>navigate("/product/1")}  >
                                <img src="https://picsum.photos/seed/headphone/200/200" alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"  />
                            </div>

                            <div className="flex-1 min-w-0" >

                                <div className="flex items-start justify-between gap-2" >

                                    <div>
                                        <p className="text-xs font-medium text-indigo-600 uppercase tracking-wide mb-0.5" >Electronics</p>
                                        <h3 onClick={()=>navigate("/product/1")} className="text-sm sm:text-base font-semibold text-slate-900 cursor-pointer hover:text-indigo-600 transition-colors "  >Premium Wireless Headphones</h3>
                                        <div className="flex items-center gap-3.5 mt-1" >
                                            <span className="text-xs text-slate-400" > Color: Midnight Black </span>
                                            <span className="text-xs text-slate-400" > Size: Standard </span>
                                        </div>
                                    </div>

                                    <button className="p-1.5 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors shrink-0" >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>

                                    </button>

                                </div>

                                <div className="flex items-center justify-between mt-4" >


                                    <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden " >
                                        <button className="px-3 py-1.5 text-slate-600 hover:bg-slate-100 font-medium text-lg transition-colors " >-</button>
                                        <span className="px-4 py-1.5 text-slate-900 font-semibold text-sm border-x border-slate-200 min-w-12 text-center" >1</span>
                                        <button className="px-3 py-1.5 text-slate-600 hover:bg-slate-100 font-medium text-lg transition-colors " >+</button>
                                    </div>

                                    <p className="text-base font-bold text-slate-900" >$149.99</p>

                                </div>

                            </div>
                        </div>
                        {/* item2 */}
                        <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-5 flex gap-4" >
                            <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-xl overflow-hidden bg-slate-100 cursor-pointer" onClick={()=>navigate("/product/1")}  >
                                <img src="https://picsum.photos/seed/headphone1/200/200" alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"  />
                            </div>

                            <div className="flex-1 min-w-0" >

                                <div className="flex items-start justify-between gap-2" >

                                    <div>
                                        <p className="text-xs font-medium text-indigo-600 uppercase tracking-wide mb-0.5" >Electronics</p>
                                        <h3 onClick={()=>navigate("/product/1")} className="text-sm sm:text-base font-semibold text-slate-900 cursor-pointer hover:text-indigo-600 transition-colors "  >Premium Wireless Headphones</h3>
                                        <div className="flex items-center gap-3.5 mt-1" >
                                            <span className="text-xs text-slate-400" > Color: Midnight Black </span>
                                            <span className="text-xs text-slate-400" > Size: Standard </span>
                                        </div>
                                    </div>

                                    <button className="p-1.5 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors shrink-0" >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>

                                    </button>

                                </div>

                                <div className="flex items-center justify-between mt-4" >


                                    <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden " >
                                        <button className="px-3 py-1.5 text-slate-600 hover:bg-slate-100 font-medium text-lg transition-colors " >-</button>
                                        <span className="px-4 py-1.5 text-slate-900 font-semibold text-sm border-x border-slate-200 min-w-12 text-center" >1</span>
                                        <button className="px-3 py-1.5 text-slate-600 hover:bg-slate-100 font-medium text-lg transition-colors " >+</button>
                                    </div>

                                    <p className="text-base font-bold text-slate-900" >$149.99</p>

                                </div>

                            </div>
                        </div>
                        {/* item3 */}
                        <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-5 flex gap-4" >
                            <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-xl overflow-hidden bg-slate-100 cursor-pointer" onClick={()=>navigate("/product/1")}  >
                                <img src="https://picsum.photos/seed/headphone3/200/200" alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"  />
                            </div>

                            <div className="flex-1 min-w-0" >

                                <div className="flex items-start justify-between gap-2" >

                                    <div>
                                        <p className="text-xs font-medium text-indigo-600 uppercase tracking-wide mb-0.5" >Electronics</p>
                                        <h3 onClick={()=>navigate("/product/1")} className="text-sm sm:text-base font-semibold text-slate-900 cursor-pointer hover:text-indigo-600 transition-colors "  >Premium Wireless Headphones</h3>
                                        <div className="flex items-center gap-3.5 mt-1" >
                                            <span className="text-xs text-slate-400" > Color: Midnight Black </span>
                                            <span className="text-xs text-slate-400" > Size: Standard </span>
                                        </div>
                                    </div>

                                    <button className="p-1.5 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors shrink-0" >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>

                                    </button>

                                </div>

                                <div className="flex items-center justify-between mt-4" >


                                    <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden " >
                                        <button className="px-3 py-1.5 text-slate-600 hover:bg-slate-100 font-medium text-lg transition-colors " >-</button>
                                        <span className="px-4 py-1.5 text-slate-900 font-semibold text-sm border-x border-slate-200 min-w-12 text-center" >1</span>
                                        <button className="px-3 py-1.5 text-slate-600 hover:bg-slate-100 font-medium text-lg transition-colors " >+</button>
                                    </div>

                                    <p className="text-base font-bold text-slate-900" >$149.99</p>

                                </div>

                            </div>
                        </div>


                        <button className="flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors mt-2" onClick={()=>navigate("/products")}  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"  className="w-4 h-4" >
                                 <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                            Continue Shopping
                        </button>

                    </div>


                    {/* order summary */}

                    <div className="space-y-5" >

                        {/* promo */}
                        <div className="bg-white rounded-2xl shadow-sm p-5" >
                            <h3 className="text-sm font-bold text-slate-900 mb-3" > Promo code </h3>

                            <div className="flex gap-2" >
                                <input type="text" placeholder="enter code.."  className="flex-1 border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-slate-400 "  />
                                <button className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl transition-colors">Apply</button>
                            </div>
                        </div>

                        {/* summary */}

                         <div className="bg-white rounded-2xl shadow-sm p-5" >
                            <h3 className="text-sm font-bold text-slate-900 mb-3" > Order summary </h3>
                            
                            <div className="space-y-3 mb-4" >
                                
                                <div className="flex justify-between text-sm text-slate-600" >
                                    <span>subtotal (4 items)</span>
                                    <span>$499.98</span>
                                </div>

                                <div className="flex justify-between text-sm text-slate-600" >
                                    <span>shipping</span>
                                    <span className="text-emerald-600 font-medium" >Free</span>
                                </div>

                                <div className="flex justify-between text-sm text-slate-600" >
                                    <span>estimated tax</span>
                                    <span>$40</span>
                                </div>

                                 <div className="flex justify-between text-sm text-slate-600" >
                                    <span className="text-slate-900 font-bold" >Total</span>
                                    <span className="text-xl text-slate-900  font-extrabold " >$539.98</span>
                                </div>

                                <button onClick={()=>navigate("/checkout")}  className="w-full mt-5 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl text-sm transition-colors" >
                                    Proceed to checkout
                                </button>

                                <div className="flex items-center justify-center gap-2 mt-4" >
                                    <span className="px-2 py-1 bg-slate-50 border border-slate-100 rounded text-xs text-slate-400 font-medium " >VISA</span>
                                    <span className="px-2 py-1 bg-slate-50 border border-slate-100 rounded text-xs text-slate-400 font-medium " >MC</span>
                                    <span className="px-2 py-1 bg-slate-50 border border-slate-100 rounded text-xs text-slate-400 font-medium " >AMEX</span>
                                    <span className="px-2 py-1 bg-slate-50 border border-slate-100 rounded text-xs text-slate-400 font-medium " >PP</span>
                                </div>

                            </div>



                        </div>

                    </div>
                </div>

            </div>
        </div>

    )

}