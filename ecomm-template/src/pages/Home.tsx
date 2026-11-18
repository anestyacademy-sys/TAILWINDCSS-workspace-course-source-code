import { useNavigate } from "react-router-dom"

export default function Home(){

    const navigate = useNavigate();

    return(

        <div>

            {/* promo */}
            <div className="bg-indigo-600  text-white py-2.5 px-4 text-center" >
                <p className="text-xs sm:text-sm font-medium" > 
                    🎉 Free shipping on orders over $50 . <span className="underline cursor-pointer hover:no-underline" > shop now </span>
                </p>
            </div>

            {/* hero section */}
            
            <section className="bg-slate-900 text-white py-20 sm:py-28" >
                <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center" >

                    <span className="inline-block text-xs font-semibold text-indigo-400 uppercase mb-5" >
                        New Collection 2026
                    </span>

                    <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-5">
                        Discover products <br />
                        <span className="text-indigo-400" >you'll love</span>
                    </h1>

                    <p className="text-slate-400 text-lg mb-9 max-w-xl  mx-auto" > Premium quality, curated collections, and a seamless shopping experience — all in one place.</p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center" >

                        <button className=" bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors " >
                            Shop now
                        </button>

                        <button className=" border border-slate-700  hover:border-slate-500 text-slate-300 font-semibold px-8 py-3.5 rounded-xl transition-colors " >
                            Browse Categories
                        </button>
                    </div>

                    <div className="flex justify-center gap-10 mt-12 pt-10 border-t border-slate-800" >

                        <div>
                            <p className="text-2xl font-bold text-white" >50k+</p>
                            <p className="text-xs text-slate-500 mt-0.5" >Customers</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-white" >10k+</p>
                            <p className="text-xs text-slate-500 mt-0.5" >Products</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-white" >4.9★</p>
                            <p className="text-xs text-slate-500 mt-0.5" >Rating</p>
                        </div>

                    </div>
                </div>
                
            </section>


            {/* featured products */}

            <section className="py-20 bg-slate-50" >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >

                    <div className="flex items-end justify-between" >
                        <div>
                            <p className="text-sm font-semibold text-indigo-600 uppercase mb-2 tracking-wider " >Handpicked For You</p>
                            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900" >Featured Products</h2>
                        </div>

                        <button  className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors" >
                            View All
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>

                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20" >

                        {/* product card */}
                        <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer " >
                            
                            <div className="relative overflow-hidden aspect-square" onClick={()=>navigate("/product/1")}>
                                <img src="https://picsum.photos/seed/picsum/400/400"   alt="product img" className="w-full h-full object-cover group-hover:scal-105 transition-transform duration-500 "  />
                                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full " >SALE</span>
                                <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity hover:text-rose-600" >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>
                                </button>
                            </div>

                            <div className="p-4" >
                                <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-1" >Electorinics</p>
                                <h3 className=" text-sm font-semibold text-slate-900 mb-2 hover:text-indigo-600  transition-colors cursor-pointer" onClick={() =>navigate("/product/1")}  > Premium Wireless Headphones </h3>
                                <div className="flex items-center gap-1 mb-3">
                                    <span className="text-amber-400 text-sm">★★★★★</span>
                                    <span className="text-xs text-slate-400" >(234)</span>
                                </div>
                                <div className="flex items-center justify-between" >
                                    <div className="flex items-baseline gap-2" >
                                        <span className="text-base font-bold text-slate-900" >$149.99</span>
                                        <span className="text-xs text-slate-400 line-through " >$149.99</span>
                                    </div>

                                    <button onClick={()=>navigate("/cart")} className="p-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-mg transition-colors"  >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                            </svg>

                                    </button>
                                </div>
                            </div>

                        </div>
                        {/* product card */}
                        <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer " >
                            
                            <div className="relative overflow-hidden aspect-square" onClick={()=>navigate("/product/1")}>
                                <img src="https://picsum.photos/seed/picsum/400/400"   alt="product img" className="w-full h-full object-cover group-hover:scal-105 transition-transform duration-500 "  />
                                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full " >SALE</span>
                                <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity hover:text-rose-600" >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>
                                </button>
                            </div>

                            <div className="p-4" >
                                <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-1" >Electorinics</p>
                                <h3 className=" text-sm font-semibold text-slate-900 mb-2 hover:text-indigo-600  transition-colors cursor-pointer" onClick={() =>navigate("/product/1")}  > Premium Wireless Headphones </h3>
                                <div className="flex items-center gap-1 mb-3">
                                    <span className="text-amber-400 text-sm">★★★★★</span>
                                    <span className="text-xs text-slate-400" >(234)</span>
                                </div>
                                <div className="flex items-center justify-between" >
                                    <div className="flex items-baseline gap-2" >
                                        <span className="text-base font-bold text-slate-900" >$149.99</span>
                                        <span className="text-xs text-slate-400 line-through " >$149.99</span>
                                    </div>

                                    <button onClick={()=>navigate("/cart")} className="p-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-mg transition-colors"  >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                            </svg>

                                    </button>
                                </div>
                            </div>

                        </div>
                        {/* product card */}
                        <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer " >
                            
                            <div className="relative overflow-hidden aspect-square" onClick={()=>navigate("/product/1")}>
                                <img src="https://picsum.photos/seed/picsum/400/400"   alt="product img" className="w-full h-full object-cover group-hover:scal-105 transition-transform duration-500 "  />
                                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full " >SALE</span>
                                <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity hover:text-rose-600" >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>
                                </button>
                            </div>

                            <div className="p-4" >
                                <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-1" >Electorinics</p>
                                <h3 className=" text-sm font-semibold text-slate-900 mb-2 hover:text-indigo-600  transition-colors cursor-pointer" onClick={() =>navigate("/product/1")}  > Premium Wireless Headphones </h3>
                                <div className="flex items-center gap-1 mb-3">
                                    <span className="text-amber-400 text-sm">★★★★★</span>
                                    <span className="text-xs text-slate-400" >(234)</span>
                                </div>
                                <div className="flex items-center justify-between" >
                                    <div className="flex items-baseline gap-2" >
                                        <span className="text-base font-bold text-slate-900" >$149.99</span>
                                        <span className="text-xs text-slate-400 line-through " >$149.99</span>
                                    </div>

                                    <button onClick={()=>navigate("/cart")} className="p-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-mg transition-colors"  >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                            </svg>

                                    </button>
                                </div>
                            </div>

                        </div>
                        {/* product card */}
                        <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer " >
                            
                            <div className="relative overflow-hidden aspect-square" onClick={()=>navigate("/product/1")}>
                                <img src="https://picsum.photos/seed/picsum/400/400"   alt="product img" className="w-full h-full object-cover group-hover:scal-105 transition-transform duration-500 "  />
                                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full " >SALE</span>
                                <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity hover:text-rose-600" >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>
                                </button>
                            </div>

                            <div className="p-4" >
                                <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-1" >Electorinics</p>
                                <h3 className=" text-sm font-semibold text-slate-900 mb-2 hover:text-indigo-600  transition-colors cursor-pointer" onClick={() =>navigate("/product/1")}  > Premium Wireless Headphones </h3>
                                <div className="flex items-center gap-1 mb-3">
                                    <span className="text-amber-400 text-sm">★★★★★</span>
                                    <span className="text-xs text-slate-400" >(234)</span>
                                </div>
                                <div className="flex items-center justify-between" >
                                    <div className="flex items-baseline gap-2" >
                                        <span className="text-base font-bold text-slate-900" >$149.99</span>
                                        <span className="text-xs text-slate-400 line-through " >$149.99</span>
                                    </div>

                                    <button onClick={()=>navigate("/cart")} className="p-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-mg transition-colors"  >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                            </svg>

                                    </button>
                                </div>
                            </div>

                        </div>



                    </div>

                </div>    
            </section>


            {/* categorie */}
            <section className="py-20 bg-white" >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
                    
                    <div className=" text-center mb-12" >
                        <p className=" text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-2 " >Browse By</p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900" >Shop Categories</h2>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4" >

                        <button onClick={()=>navigate("/categories")}  className="group relative overflow-hidden rounded-2xl aspect-square flex flex-col items-center justify-center p-4 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg" >

                            <div className="absolute inset-0 bg-linear-to-br from-blue-500 to-indigo-600 opacity-90 group-hover:opacity-100 transition-opacity " />

                            <span className="relative text-3xl mb-2" >💻</span>
                            <p className="relative text-sm font-semibold text-white" >Electronic</p>
                            <p className="relative text-xs text-white/70 mt-0.5" >240+ items</p>
                        </button>
                        <button onClick={() => navigate("/categories")} className="group relative overflow-hidden rounded-2xl aspect-square flex flex-col items-center justify-center p-4 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg">
                            <div className="absolute inset-0 bg-linear-to-br from-pink-500 to-rose-600 opacity-90 group-hover:opacity-100 transition-opacity" />
                            <span className="relative text-3xl mb-2">👗</span>
                            <p className="relative text-sm font-semibold text-white">Fashion</p>
                            <p className="relative text-xs text-white/70 mt-0.5">580+ items</p>
                        </button>
                        <button onClick={() => navigate("/categories")} className="group relative overflow-hidden rounded-2xl aspect-square flex flex-col items-center justify-center p-4 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg">
                            <div className="absolute inset-0 bg-linear-to-br from-amber-500 to-orange-600 opacity-90 group-hover:opacity-100 transition-opacity" />
                            <span className="relative text-3xl mb-2">🏠</span>
                            <p className="relative text-sm font-semibold text-white">Home & Living</p>
                            <p className="relative text-xs text-white/70 mt-0.5">320+ items</p>
                        </button>
                        <button onClick={() => navigate("/categories")} className="group relative overflow-hidden rounded-2xl aspect-square flex flex-col items-center justify-center p-4 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg">
                            <div className="absolute inset-0 bg-linear-to-br from-emerald-500 to-teal-600 opacity-90 group-hover:opacity-100 transition-opacity" />
                            <span className="relative text-3xl mb-2">⚡</span>
                            <p className="relative text-sm font-semibold text-white">Sports</p>
                            <p className="relative text-xs text-white/70 mt-0.5">190+ items</p>
                        </button>
                        <button onClick={() => navigate("/categories")} className="group relative overflow-hidden rounded-2xl aspect-square flex flex-col items-center justify-center p-4 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg">
                            <div className="absolute inset-0 bg-linear-to-br from-violet-500 to-purple-600 opacity-90 group-hover:opacity-100 transition-opacity" />
                            <span className="relative text-3xl mb-2">✨</span>
                            <p className="relative text-sm font-semibold text-white">Beauty</p>
                            <p className="relative text-xs text-white/70 mt-0.5">410+ items</p>
                        </button>
                        <button onClick={() => navigate("/categories")} className="group relative overflow-hidden rounded-2xl aspect-square flex flex-col items-center justify-center p-4 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg">
                            <div className="absolute inset-0 bg-linear-to-br from-slate-500 to-slate-700 opacity-90 group-hover:opacity-100 transition-opacity" />
                            <span className="relative text-3xl mb-2">📚</span>
                            <p className="relative text-sm font-semibold text-white">Books</p>
                            <p className="relative text-xs text-white/70 mt-0.5">870+ items</p>
                        </button>

                    </div>

                </div>
            </section>


            {/* why us */}

            <section className="py-16 bg-slate-50" >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >

                    <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6" >

                        <div className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-sm" >
                            <div className="w-11 h-11 bg-indigo-50 rounded-xl flex items-center justify-center text-xl  " >🚚</div>
                            <div>
                                <p className="font-semibold text-slate-900 text-sm mb-0.5" >Free Shipping</p>
                                <p className="text-xs text-slate-500" >On all orders over $50</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-sm" >
                            <div className="w-11 h-11 bg-indigo-50 rounded-xl flex items-center justify-center text-xl  " >🔄</div>
                            <div>
                                <p className="font-semibold text-slate-900 text-sm mb-0.5" >Easy Returns</p>
                                <p className="text-xs text-slate-500" >30-day hassle-free returns</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-sm" >
                            <div className="w-11 h-11 bg-indigo-50 rounded-xl flex items-center justify-center text-xl  " >🔒</div>
                            <div>
                                <p className="font-semibold text-slate-900 text-sm mb-0.5" >Secure Payment</p>
                                <p className="text-xs text-slate-500" >100% secure transactions</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-sm" >
                            <div className="w-11 h-11 bg-indigo-50 rounded-xl flex items-center justify-center text-xl  " >💬</div>
                            <div>
                                <p className="font-semibold text-slate-900 text-sm mb-0.5" >24/7 Support</p>
                                <p className="text-xs text-slate-500" >We're here when you need us</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* newsletter  */}


            <section className=" py-20 text-white bg-linear-to-br from-indigo-600 to-violet-700  " >

                <div className="max-w-7xl mx-auto px-4 text-center" >
                    <p className="text-sm font-semibold text-indigo-200 uppercase tracking-wider mb-3" >Stay Updated</p>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4" >Get Exclusive Deals</h2>
                    <p className="text-indigo-200 mb-8 text-lg" >Subscribe and get 15% off your first order.</p>

                    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" >
                        <input type="text"  placeholder="Enter your email"  className="flex-1 px-4 py-3.5 bg-white/10 border border-white/20 text-white placeholder-white rounded-xl focus:ring-2 focus:outline-none text-sm " />
                        <button className="px-6 py-3.5 bg-white text-indigo-700 font-semibold rounded-xl text-sm hover:bg-indigo-50  transition-colors" >Subscribe Now</button>
                    </div>

                    <p className="text-xs text-indigo-300 mt-4" >No spam ever. Unsubscribe at any time.</p>
                </div>

            </section>

        </div>

    )

}